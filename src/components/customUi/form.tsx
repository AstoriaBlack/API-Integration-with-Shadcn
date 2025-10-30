/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { format } from 'date-fns';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PhoneInput } from '@/components/ui/phone-input';
import { BirthDateAgePicker } from '@/components/ui/birth-date-age-picker';
import { UserSchema, User } from '@/components/data-table/columns';
import { Plus, Trash2 } from 'lucide-react';

type Props = {
	initialData?: User;
	isEdit?: boolean;
	onSubmit: (data: User) => Promise<void> | void;
	onOpenChange?: (open: boolean) => void;
};

export function CustomForm({ initialData, isEdit, onSubmit, onOpenChange }: Props) {
	const [birthDate, setBirthDate] = React.useState<Date | undefined>(
		initialData ? (initialData.birthDate ? new Date(initialData.birthDate) : undefined) : undefined
	);
	const [age, setAge] = React.useState<number | undefined>(initialData?.age);

	const [phoneNumbers, setPhoneNumbers] = React.useState<string[]>([
		initialData?.phone ?? ''
	]);

	const [errors, setErrors] = React.useState<Record<string, string>>({});

	const clearFieldError = (field: string) => {
		setErrors((prev) => {
			const next = { ...prev };
			delete (next as any)[field];
			return next;
		});
	};

	const validateField = (field: string, value: any) => {
		try {
			const fieldSchema = (UserSchema as any).pick({ [field]: true });
			const parsed = fieldSchema.safeParse({ [field]: value });
			if (!parsed.success) {
				setErrors((prev) => ({ ...prev, [field]: parsed.error.issues[0].message }));
				return false;
			}
			setErrors((prev) => {
				const next = { ...prev };
				delete (next as any)[field];
				return next;
			});
			return true;
		} catch {
			setErrors((prev) => {
				const next = { ...prev };
				delete (next as any)[field];
				return next;
			});
			return true;
		}
	};

	const addPhoneNumber = () => {
		setPhoneNumbers([...phoneNumbers, '']);
	};

	const removePhoneNumber = (index: number) => {
		if (phoneNumbers.length > 1) {
			const updated = phoneNumbers.filter((_, i) => i !== index);
			setPhoneNumbers(updated);
		}
	};

	const updatePhoneNumber = (index: number, value: string) => {
		const updated = [...phoneNumbers];
		updated[index] = value;
		setPhoneNumbers(updated);
		if (index === 0) {
			validateField('phone', value);
		}
	};

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				const formData = new FormData(e.target as HTMLFormElement);
				const birthDateStr = birthDate ? format(birthDate, 'yyyy-MM-dd') : '';

				let finalId: number;
				if (initialData?.id) {
					finalId = initialData.id;
				} else {
					const last = Number(sessionStorage.getItem('lastUserId') ?? 0) || 0;
					finalId = last + 1;
					sessionStorage.setItem('lastUserId', String(finalId));
				}

				const primaryPhone = phoneNumbers[0] || '';

				const rawData = {
					id: finalId,
					firstName: (formData.get('firstName') as string) ?? '',
					lastName: (formData.get('lastName') as string) ?? '',
					age: age || 0,
					gender: (formData.get('gender') as string) ?? '',
					email: (formData.get('email') as string) ?? '',
					phone: primaryPhone,
					birthDate: birthDateStr,
				} as unknown as User;

				try {
					const validatedData = UserSchema.parse(rawData);
					await Promise.resolve(onSubmit(validatedData));
					(e.target as HTMLFormElement).reset();
					setBirthDate(undefined);
					setAge(undefined);
					setPhoneNumbers(['']);
					setErrors({});
					onOpenChange?.(false);
				} catch (error: any) {
					const fieldErrors: Record<string, string> = {};
					if (error?.issues) {
						error.issues.forEach((err: any) => {
							fieldErrors[err.path?.[0]] = err.message;
						});
					}
					setErrors(fieldErrors);
				}
			}}
			className="space-y-4"
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label className="mb-1 block text-sm font-medium">First Name</label>
					<Input
						name="firstName"
						placeholder="Enter First Name"
						onChange={() => clearFieldError('firstName')}
						onBlur={(e) => validateField('firstName', (e.target as HTMLInputElement).value)}
						defaultValue={initialData?.firstName}
					/>
					{errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">Last Name</label>
					<Input
						name="lastName"
						placeholder="Enter Last Name"
						onChange={() => clearFieldError('lastName')}
						onBlur={(e) => validateField('lastName', (e.target as HTMLInputElement).value)}
						defaultValue={initialData?.lastName}
					/>
					{errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">Gender</label>
					<select
						name="gender"
						defaultValue={initialData?.gender ?? ''}
						onChange={(e) => validateField('gender', (e.target as HTMLSelectElement).value)}
						className="w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="">Select Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
					{errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
				</div>

				<div className="sm:col-span-2">
					<label className="mb-1 block text-sm font-medium">Email</label>
					<Input
						name="email"
						type="email"
						placeholder="Enter Email"
						onChange={() => clearFieldError('email')}
						onBlur={(e) => validateField('email', (e.target as HTMLInputElement).value)}
						defaultValue={initialData?.email}
					/>
					{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
				</div>

				<div className="sm:col-span-2">
					<div className="mb-2 flex items-center justify-between">
						<label className="block text-sm font-medium">
							Phone Number{phoneNumbers.length > 1 ? 's' : ''}
						</label>
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={addPhoneNumber}
							className="h-7 text-xs"
						>
							<Plus className="mr-1 h-3 w-3" />
							Add Phone
						</Button>
					</div>

					<div className="space-y-3">
						{phoneNumbers.map((phone, index) => (
							<div key={index} className="flex items-start gap-2">
								<div className="flex-1">
									<PhoneInput
										value={phone}
										onChange={(v) => updatePhoneNumber(index, v)}
										placeholder={index === 0 ? 'Primary phone number' : 'Additional phone number'}
									/>
									{index === 0 && errors.phone && (
										<p className="mt-1 text-sm text-red-600">{errors.phone}</p>
									)}
								</div>
								{phoneNumbers.length > 1 && (
									<Button
										type="button"
										variant="ghost"
										size="sm"
										onClick={() => removePhoneNumber(index)}
										className="mt-0 h-10 px-2 text-red-600 hover:bg-red-50 hover:text-red-700"
										title="Remove phone number"
									>
										<Trash2 className="h-4 w-4" />
									</Button>
								)}
							</div>
						))}
					</div>

					{phoneNumbers.length > 1 && (
						<p className="mt-2 text-xs text-slate-500">
							Note: Only the primary (first) phone number will be saved
						</p>
					)}
				</div>

				<div className="sm:col-span-2">
					<BirthDateAgePicker
						birthDate={birthDate}
						onBirthDateChange={(d) => {
							setBirthDate(d);
							if (d) {
								const birthStr = format(d, 'yyyy-MM-dd');
								validateField('birthDate', birthStr);
								const calcAge = (() => {
									const today = new Date();
									let a = today.getFullYear() - d.getFullYear();
									const monthDiff = today.getMonth() - d.getMonth();
									if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < d.getDate())) a--;
									return a;
								})();
								validateField('age', calcAge);
							} else {
								setErrors((prev) => {
									const next = { ...prev };
									delete (next as any)['birthDate'];
									delete (next as any)['age'];
									return next;
								});
							}
							clearFieldError('birthDate');
							clearFieldError('age');
						}}
						onAgeChange={(a) => {
							setAge(a);
							clearFieldError('age');
						}}
						birthDateError={errors.birthDate}
						ageError={errors.age}
						className="space-y-4"
					/>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<Button type="submit" className="flex-1">
					{isEdit ? 'Update User' : 'Add User'}
				</Button>
				<Button
					type="button"
					variant="ghost"
					className="w-32"
					onClick={() => {
						onOpenChange?.(false);
					}}
				>
					Cancel
				</Button>
			</div>
		</form>
	);
}

export default CustomForm;
