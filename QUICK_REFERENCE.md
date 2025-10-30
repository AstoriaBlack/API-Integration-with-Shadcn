# Quick Reference Card - Form Features

## 🚀 Quick Cheat Sheet

### Multiple Phone Numbers

```tsx
// 1. State for multiple phones
const [phoneNumbers, setPhoneNumbers] = useState([''])

// 2. Add phone
const addPhoneNumber = () => {
  setPhoneNumbers([...phoneNumbers, ''])
}

// 3. Remove phone
const removePhoneNumber = (index) => {
  const updated = phoneNumbers.filter((_, i) => i !== index)
  setPhoneNumbers(updated)
}

// 4. Update phone
const updatePhoneNumber = (index, value) => {
  const updated = [...phoneNumbers]
  updated[index] = value
  setPhoneNumbers(updated)
}

// 5. Render phones
{phoneNumbers.map((phone, index) => (
  <PhoneInput
    key={index}
    value={phone}
    onChange={(v) => updatePhoneNumber(index, v)}
  />
))}
```

---

## 📋 Array Operations

```tsx
// Add item
setArray([...array, newItem])

// Remove item at index
setArray(array.filter((_, i) => i !== index))

// Update item at index
const copy = [...array]
copy[index] = newValue
setArray(copy)

// Map to components
{array.map((item, index) => (
  <Component key={index} data={item} />
))}
```

---

## ✅ Validation

```tsx
// Validate single field
const validateField = (field, value) => {
  const fieldSchema = UserSchema.pick({ [field]: true })
  const result = fieldSchema.safeParse({ [field]: value })

  if (!result.success) {
    setErrors(prev => ({ ...prev, [field]: result.error.issues[0].message }))
    return false
  }

  setErrors(prev => {
    const next = { ...prev }
    delete next[field]
    return next
  })
  return true
}

// Use in input
<Input
  name="firstName"
  onBlur={(e) => validateField('firstName', e.target.value)}
/>
{errors.firstName && <p className="text-red-600">{errors.firstName}</p>}
```

---

## 🎨 Conditional Rendering

```tsx
// Show only if true
{condition && <Component />}

// If-else
{condition ? <ComponentA /> : <ComponentB />}

// Examples
{phoneNumbers.length > 1 && <DeleteButton />}
{isLoading ? <Spinner /> : <Content />}
{error ? <ErrorMsg /> : <SuccessMsg />}
```

---

## 🔄 State Updates

```tsx
// Simple state
const [value, setValue] = useState('')
setValue('new value')

// Object state
const [user, setUser] = useState({ name: '', age: 0 })
setUser({ ...user, name: 'John' })  // Update one property

// Array state
const [items, setItems] = useState([])
setItems([...items, newItem])  // Add
setItems(items.filter(i => i.id !== id))  // Remove
```

---

## 📞 Phone Input Props

```tsx
<PhoneInput
  value={phone}                    // Current phone number
  onChange={(v) => setPhone(v)}    // When phone changes
  placeholder="Enter phone"         // Placeholder text
  className="custom-class"          // CSS classes
  name="phone"                      // Form field name
/>
```

---

## 🎯 Common Patterns

### Dynamic Label
```tsx
<label>
  Phone Number{phoneNumbers.length > 1 ? 's' : ''}
</label>
```

### Contextual Placeholder
```tsx
placeholder={index === 0 ? 'Primary' : 'Additional'}
```

### Show Note When Multiple
```tsx
{phoneNumbers.length > 1 && (
  <p className="text-sm text-gray-500">
    Only first phone saves
  </p>
)}
```

---

## 🔍 Debugging Tips

```tsx
// Log state
console.log('phoneNumbers:', phoneNumbers)

// Log in render
console.log('Component rendered')

// Log function calls
const addPhoneNumber = () => {
  console.log('Adding phone')
  setPhoneNumbers([...phoneNumbers, ''])
}

// Check array length
console.log('Count:', phoneNumbers.length)

// Check specific value
console.log('First phone:', phoneNumbers[0])
```

---

## 📊 Array Method Quick Reference

```tsx
// .map() - Transform each item
[1, 2, 3].map(n => n * 2)  // [2, 4, 6]

// .filter() - Keep matching items
[1, 2, 3, 4].filter(n => n > 2)  // [3, 4]

// .find() - Get first match
[1, 2, 3].find(n => n > 1)  // 2

// .includes() - Check existence
[1, 2, 3].includes(2)  // true

// .length - Get count
[1, 2, 3].length  // 3

// [index] - Access by position
const arr = ['a', 'b', 'c']
arr[0]  // 'a'
arr[1]  // 'b'
```

---

## 🎨 Styling Classes

```tsx
// Layout
className="flex items-center gap-2"
className="grid grid-cols-2 gap-4"
className="space-y-3"

// Text
className="text-sm text-gray-600"
className="font-medium"

// Colors
className="text-red-600"
className="bg-blue-50"
className="hover:bg-red-50"

// Size
className="w-full"
className="h-10"
className="px-3 py-2"
```

---

## ⚡ Event Handlers

```tsx
// Click
onClick={handleClick}
onClick={() => handleClick(id)}

// Change
onChange={(e) => setValue(e.target.value)}
onChange={(v) => updateValue(v)}

// Blur (leave field)
onBlur={(e) => validate(e.target.value)}

// Submit
onSubmit={(e) => {
  e.preventDefault()
  handleSubmit()
}}
```

---

## 🔐 Form Submission

```tsx
<form onSubmit={async (e) => {
  e.preventDefault()  // Don't refresh page

  const formData = new FormData(e.target)
  const data = {
    firstName: formData.get('firstName'),
    phone: phoneNumbers[0],  // Primary phone
    // ... more fields
  }

  try {
    const validated = UserSchema.parse(data)
    await onSubmit(validated)
    // Reset form on success
  } catch (error) {
    // Show errors
  }
}}>
```

---

## 💾 Session Storage

```tsx
// Save
sessionStorage.setItem('key', 'value')

// Read
const value = sessionStorage.getItem('key')

// Remove
sessionStorage.removeItem('key')

// Clear all
sessionStorage.clear()

// Example: Auto-increment ID
const lastId = Number(sessionStorage.getItem('lastUserId') ?? 0)
const newId = lastId + 1
sessionStorage.setItem('lastUserId', String(newId))
```

---

## 🐛 Common Errors & Fixes

### Error: Cannot read property 'map' of undefined
```tsx
// ❌ Wrong
{phones.map(...)}  // phones might be undefined

// ✅ Right
{phones?.map(...)}  // Optional chaining
{(phones || []).map(...)}  // Default to empty array
```

### Error: Objects are not valid as React child
```tsx
// ❌ Wrong
<div>{user}</div>  // Can't render object

// ✅ Right
<div>{user.name}</div>  // Render specific property
<div>{JSON.stringify(user)}</div>  // Debug: show as string
```

### Error: Each child should have a unique "key" prop
```tsx
// ❌ Wrong
{items.map(item => <div>{item}</div>)}

// ✅ Right
{items.map((item, index) => <div key={index}>{item}</div>)}
{items.map(item => <div key={item.id}>{item}</div>)}
```

---

## 📚 File Locations

```
src/
├── components/
│   ├── customUi/
│   │   └── form.tsx          ← Main form (updated)
│   └── ui/
│       └── phone-input.tsx   ← Phone input component
├── data-table/
│   └── columns.tsx            ← User schema & columns
└── pages/
    └── pageA/
        ├── UsersTable.tsx     ← API users
        └── NewlyAddedUsersTable.tsx  ← Local users
```

---

## 🎓 Learning Resources

| Topic | File to Read |
|-------|--------------|
| Visual diagrams | PHONE_NUMBERS_VISUAL_GUIDE.md |
| Code explanations | FORM_IMPROVEMENTS_GUIDE.md |
| React basics | TUTORIAL.md |
| Quick overview | QUICK_START.md |
| Summary | WHATS_NEW.md |

---

## ⚡ Copy-Paste Snippets

### Add Multiple Items Pattern
```tsx
const [items, setItems] = useState([''])

const addItem = () => setItems([...items, ''])

const removeItem = (index) => {
  if (items.length > 1) {
    setItems(items.filter((_, i) => i !== index))
  }
}

const updateItem = (index, value) => {
  const updated = [...items]
  updated[index] = value
  setItems(updated)
}
```

### Render with Delete
```tsx
{items.map((item, index) => (
  <div key={index} className="flex gap-2">
    <Input
      value={item}
      onChange={(e) => updateItem(index, e.target.value)}
    />
    {items.length > 1 && (
      <Button onClick={() => removeItem(index)}>
        <Trash2 />
      </Button>
    )}
  </div>
))}
```

---

## 🎯 Remember

- Arrays need `key` prop when mapping
- Don't modify state directly (use setState)
- Use spread operator `[...]` to copy arrays
- Validate on `onBlur` for better UX
- Only first phone saves (by design)

---

**Keep this handy while coding!** 📌
