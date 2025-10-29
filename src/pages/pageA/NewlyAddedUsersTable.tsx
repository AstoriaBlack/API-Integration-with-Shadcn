import { columns, User } from '@/components/data-table/columns';
import { DataTable } from '@/components/data-table/data-table';
import { usePostStore } from '@/store/postStore';

type Props = {
  data?: User[];
  onAddData?: (data: User) => void;
};

export default function NewlyAddedUsersTable({ data, onAddData }: Props) {
  const { newPosts, addPost } = usePostStore();

  const handleAdd = (d: User) => {
    if (onAddData) return onAddData(d);
    addPost(d);
  };

  return (
    <div className="mb-8">
      <DataTable columns={columns} data={data ?? newPosts ?? []} onAddData={handleAdd} />
    </div>
  );
}
