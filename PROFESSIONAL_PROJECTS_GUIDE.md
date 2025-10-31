# Professional React Projects & Architecture Guide

## 🏆 Top Professional GitHub Repositories to Learn From

### 1. **TanStack Table (React Table)**
**Stars:** 25K+ | **Language:** TypeScript

**GitHub:** https://github.com/TanStack/table

**What it does:**
- Headless UI for building powerful tables & datagrids
- Framework-agnostic core (works with React, Vue, Solid, Svelte)
- Complete control over UI and styling
- Server-side friendly

**Why study it:**
- ✅ Perfect example of reusable component architecture
- ✅ TypeScript best practices
- ✅ Proper separation of concerns (hooks, utilities, components)
- ✅ Excellent documentation
- ✅ Production-ready code

**Key files to study:**
```
/packages/react-table/
├── hooks/
│   ├── useTable.tsx
│   ├── useHeader.tsx
│   └── useRow.tsx
├── utils/
│   ├── filterRowsUtils.ts
│   ├── sortingUtils.ts
│   └── paginationUtils.ts
└── components/
    └── (No pre-built components - headless!)
```

**What you'll learn:**
- How to build headless components
- Custom hooks architecture
- State management patterns
- TypeScript generic types
- Performance optimization

---

### 2. **TanStack Query (React Query)**
**Stars:** 40K+ | **Language:** TypeScript

**GitHub:** https://github.com/TanStack/query

**What it does:**
- Powerful server-state management
- Automatic caching and synchronization
- Handles loading, error, and success states
- DevTools for debugging

**Why study it:**
- ✅ Best practices for data fetching
- ✅ Advanced state management patterns
- ✅ Error handling strategies
- ✅ Caching mechanisms
- ✅ Works perfectly with tables/pagination

**Key concepts:**
```
React Query handles:
├── Fetching
├── Caching
├── Synchronizing
├── Updating
└── Error Handling
```

**Integration with tables:**
```tsx
// Perfect for pagination + table combination
const { data, isLoading, error, isPreviousData } = useQuery({
  queryKey: ['users', page, pageSize],
  queryFn: () => fetchUsers(page, pageSize),
})

// Controlled state from table
const [pageIndex, setPageIndex] = useState(0)
const [pageSize, setPageSize] = useState(10)
```

---

### 3. **React-Advance-Table**
**Stars:** 1.5K+ | **Language:** TypeScript

**GitHub:** https://github.com/mjm918/React-Advance-Table

**What it does:**
- Real-world example combining TanStack Table + React Query
- Sorting, filtering, pagination all working together
- Proper folder structure
- Modern React practices

**Why study it:**
- ✅ Perfect beginner-to-intermediate learning project
- ✅ Shows TanStack Table + React Query integration
- ✅ Good folder organization
- ✅ Real API integration
- ✅ Complete working example

**Folder structure:**
```
src/
├── components/
│   ├── Table/
│   │   ├── Table.tsx
│   │   ├── TableHeader.tsx
│   │   ├── TableBody.tsx
│   │   └── Pagination.tsx
│   ├── Filters/
│   ├── Layout/
│   └── Common/
├── hooks/
│   ├── useTableState.ts
│   └── usePagination.ts
├── services/
│   └── api.ts
├── types/
│   ├── table.ts
│   ├── api.ts
│   └── index.ts
└── utils/
    ├── formatting.ts
    └── validation.ts
```

---

### 4. **AG Grid**
**Stars:** 12K+ | **Language:** TypeScript

**GitHub:** https://github.com/ag-grid/ag-grid

**What it does:**
- Enterprise-grade data grid
- Handles millions of rows with virtualization
- Sorting, filtering, grouping, aggregation
- Export to CSV, Excel, etc.

**Why study it:**
- ✅ Most professional grid implementation
- ✅ Performance optimization patterns
- ✅ Virtualization techniques
- ✅ Complex state management
- ✅ Accessibility features

**When to use:**
- Large datasets (10K+ rows)
- Complex data manipulation
- Enterprise applications
- When performance is critical

---

### 5. **Ant Design**
**Stars:** 91K+ | **Language:** TypeScript

**GitHub:** https://github.com/ant-design/ant-design

**What it does:**
- Complete component library
- Enterprise UI system
- Table, pagination, modal, form components
- Comprehensive documentation

**Why study it:**
- ✅ Excellent component architecture
- ✅ Reusable component patterns
- ✅ Accessibility best practices
- ✅ Professional design system
- ✅ Large community and ecosystem

**Key folders to study:**
```
components/
├── table/
│   ├── Table.tsx
│   ├── Column.tsx
│   ├── Pagination.tsx
│   └── hooks/
├── pagination/
├── form/
└── modal/
```

---

### 6. **Chakra UI**
**Stars:** 37K+ | **Language:** TypeScript

**GitHub:** https://github.com/chakra-ui/chakra-ui

**What it does:**
- Simple, modular, accessible components
- Built-in theme system
- Great documentation

**Why study it:**
- ✅ Simple and clean code
- ✅ Accessibility first approach
- ✅ Theme system architecture
- ✅ Good component composition patterns

---

### 7. **Material UI**
**Stars:** 89K+ | **Language:** TypeScript

**GitHub:** https://github.com/mui/material-ui

**What it does:**
- Google Material Design components
- DataGrid component with professional features
- Form, table, pagination components

**Why study it:**
- ✅ Largest component library
- ✅ Professional styling patterns
- ✅ Theme customization
- ✅ Excellent API design

---

## 📐 Professional Project Structure

### Recommended Folder Organization

```
src/
├── components/
│   ├── Common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── Table/
│   │   ├── Table.tsx
│   │   ├── TableHeader.tsx
│   │   ├── TableBody.tsx
│   │   ├── TableCell.tsx
│   │   ├── TableRow.tsx
│   │   ├── Pagination.tsx
│   │   ├── Filters.tsx
│   │   └── __tests__/
│   │       └── Table.test.tsx
│   ├── Forms/
│   │   ├── UserForm.tsx
│   │   ├── FormInput.tsx
│   │   └── __tests__/
│   └── Modals/
│
├── hooks/
│   ├── useTable.ts
│   ├── usePagination.ts
│   ├── useFilters.ts
│   ├── useAuth.ts
│   └── __tests__/
│
├── services/
│   ├── api/
│   │   ├── users.ts
│   │   ├── products.ts
│   │   └── index.ts
│   ├── auth.ts
│   ├── storage.ts
│   └── __mocks__/
│
├── types/
│   ├── api.ts
│   ├── table.ts
│   ├── user.ts
│   └── index.ts
│
├── utils/
│   ├── formatting.ts
│   ├── validation.ts
│   ├── constants.ts
│   └── __tests__/
│
├── store/
│   ├── userStore.ts
│   ├── appStore.ts
│   └── index.ts
│
├── pages/
│   ├── Users/
│   │   ├── UsersPage.tsx
│   │   ├── UsersPage.module.css
│   │   └── __tests__/
│   ├── Products/
│   ├── Dashboard/
│   └── NotFound/
│
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── theme.ts
│
├── config/
│   ├── api.ts
│   ├── env.ts
│   └── constants.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🎯 Architecture Patterns

### 1. **Custom Hooks Pattern** (Reusable Logic)

```tsx
// hooks/useTable.ts
export function useTable<T>(
  data: T[],
  options?: UseTableOptions<T>
) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns: options?.columns || [],
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return { table, sorting, columnFilters, rowSelection }
}
```

**Usage:**
```tsx
function UsersPage() {
  const { data } = useQuery(['users'], fetchUsers)
  const { table } = useTable(data || [], { columns })

  return <Table table={table} />
}
```

---

### 2. **Compound Component Pattern** (Table)

```tsx
// components/Table/Table.tsx
export function Table({ table }: Props) {
  return (
    <table className="w-full">
      <Table.Header table={table} />
      <Table.Body table={table} />
    </table>
  )
}

Table.Header = function TableHeader({ table }: Props) {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th key={header.id}>
              {/* Header content */}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}

Table.Body = function TableBody({ table }: Props) {
  return (
    <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id}>
          {row.getVisibleCells().map(cell => (
            <td key={cell.id}>
              {/* Cell content */}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

// Usage:
<Table table={table} />
<Table.Header table={table} />
<Table.Body table={table} />
```

---

### 3. **Container/Presenter Pattern** (Smart/Dumb Components)

```tsx
// components/Users/UsersContainer.tsx (Smart)
export function UsersContainer() {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  const { data, isLoading, error } = useQuery({
    queryKey: ['users', pageIndex, pageSize],
    queryFn: () => fetchUsers(pageIndex, pageSize),
  })

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />

  return (
    <UsersPresenter
      users={data || []}
      pageIndex={pageIndex}
      pageSize={pageSize}
      onPageChange={setPageIndex}
      onPageSizeChange={setPageSize}
    />
  )
}

// components/Users/UsersPresenter.tsx (Dumb)
interface UsersPresenterProps {
  users: User[]
  pageIndex: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export function UsersPresenter({
  users,
  pageIndex,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: UsersPresenterProps) {
  return (
    <div>
      <Table data={users} />
      <Pagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  )
}
```

---

### 4. **Reusable Pagination Component**

```tsx
// components/Pagination/Pagination.tsx
interface PaginationProps {
  pageIndex: number
  pageSize: number
  totalItems: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
  pageSizeOptions?: number[]
}

export function Pagination({
  pageIndex,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 30, 40, 50],
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize)
  const startItem = pageIndex * pageSize + 1
  const endItem = Math.min((pageIndex + 1) * pageSize, totalItems)

  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          {pageSizeOptions.map(size => (
            <option key={size} value={size}>
              {size} per page
            </option>
          ))}
        </select>
      </div>

      <div>
        Showing {startItem}-{endItem} of {totalItems}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(0)}
          disabled={pageIndex === 0}
        >
          First
        </button>

        <button
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={pageIndex === 0}
        >
          Previous
        </button>

        <span>
          Page {pageIndex + 1} of {totalPages}
        </span>

        <button
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={pageIndex >= totalPages - 1}
        >
          Next
        </button>

        <button
          onClick={() => onPageChange(totalPages - 1)}
          disabled={pageIndex >= totalPages - 1}
        >
          Last
        </button>
      </div>
    </div>
  )
}
```

---

### 5. **Reusable Filters Component**

```tsx
// components/TableFilters/TableFilters.tsx
interface FilterConfig {
  field: string
  label: string
  type: 'text' | 'select' | 'date' | 'number'
  options?: { label: string; value: string }[]
}

interface TableFiltersProps {
  filters: Record<string, any>
  config: FilterConfig[]
  onFiltersChange: (filters: Record<string, any>) => void
  onReset: () => void
}

export function TableFilters({
  filters,
  config,
  onFiltersChange,
  onReset,
}: TableFiltersProps) {
  const handleFilterChange = (field: string, value: any) => {
    onFiltersChange({ ...filters, [field]: value })
  }

  return (
    <div className="flex gap-4 p-4">
      {config.map(filterConfig => (
        <div key={filterConfig.field}>
          <label>{filterConfig.label}</label>

          {filterConfig.type === 'text' && (
            <input
              type="text"
              value={filters[filterConfig.field] || ''}
              onChange={(e) =>
                handleFilterChange(filterConfig.field, e.target.value)
              }
              placeholder={`Filter by ${filterConfig.label}`}
            />
          )}

          {filterConfig.type === 'select' && (
            <select
              value={filters[filterConfig.field] || ''}
              onChange={(e) =>
                handleFilterChange(filterConfig.field, e.target.value)
              }
            >
              <option value="">All</option>
              {filterConfig.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      <button onClick={onReset}>Reset</button>
    </div>
  )
}
```

**Usage:**
```tsx
const [filters, setFilters] = useState({})

<TableFilters
  filters={filters}
  config={[
    { field: 'name', label: 'Name', type: 'text' },
    { field: 'status', label: 'Status', type: 'select', options: [...] },
  ]}
  onFiltersChange={setFilters}
  onReset={() => setFilters({})}
/>
```

---

### 6. **Type-Safe Data Fetching**

```tsx
// services/api/users.ts
import { z } from 'zod'

// Define schemas
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  status: z.enum(['active', 'inactive']),
})

type User = z.infer<typeof UserSchema>

// API functions with type safety
async function fetchUsers(
  page: number,
  pageSize: number,
  filters?: Record<string, any>
): Promise<{ data: User[]; total: number }> {
  const response = await fetch(
    `/api/users?page=${page}&pageSize=${pageSize}`
  )
  const json = await response.json()

  // Validate response
  const validated = z.object({
    data: z.array(UserSchema),
    total: z.number(),
  }).parse(json)

  return validated
}

export { fetchUsers, User, UserSchema }
```

---

### 7. **Routing Structure** (As Components)

```tsx
// config/routes.tsx
import { ReactNode } from 'react'

export interface RouteConfig {
  path: string
  component: ReactNode
  label: string
  icon?: ReactNode
  children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: <Dashboard />,
    label: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    path: '/users',
    component: <UsersPage />,
    label: 'Users',
    icon: <UsersIcon />,
    children: [
      {
        path: '/users/:id',
        component: <UserDetail />,
        label: 'User Detail',
      },
    ],
  },
  {
    path: '/settings',
    component: <Settings />,
    label: 'Settings',
    icon: <SettingsIcon />,
  },
]

// Usage in App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
```

---

## 🎓 Best Practices to Implement

### 1. **Use TypeScript Everywhere**
```tsx
// ✅ Good
interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (row: T) => void
}

function Table<T>({ data, columns, onRowClick }: TableProps<T>) {
  // ...
}

// ❌ Bad
function Table(props) {
  // ...
}
```

### 2. **Custom Hooks for Logic Reusability**
```tsx
// ✅ Extract logic into hooks
export function useTableState() {
  const [sorting, setSorting] = useState([])
  const [filters, setFilters] = useState({})
  // Logic here...
  return { sorting, filters, setSorting, setFilters }
}

// Use everywhere
function Users() {
  const tableState = useTableState()
  // ...
}

function Products() {
  const tableState = useTableState()
  // ...
}
```

### 3. **Separate Concerns**
```tsx
// ✅ Good - Separated
// services/api.ts
export async function fetchUsers() { /* ... */ }

// hooks/useUsers.ts
export function useUsers() {
  return useQuery(['users'], fetchUsers)
}

// components/UserList.tsx
export function UserList() {
  const { data } = useUsers()
  return <Table data={data} />
}

// ❌ Bad - Mixed together
export function UserList() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/api/users').then(r => r.json()).then(setUsers)
  }, [])
  return <Table data={users} />
}
```

### 4. **Make Components Generic**
```tsx
// ✅ Reusable for any data type
interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
}

function DataTable<T>({ data, columns, loading }: DataTableProps<T>) {
  // Works for User, Product, Order, etc.
}

// Usage
<DataTable<User> data={users} columns={userColumns} />
<DataTable<Product> data={products} columns={productColumns} />
<DataTable<Order> data={orders} columns={orderColumns} />
```

### 5. **Error Handling Pattern**
```tsx
// ✅ Consistent error handling
interface AsyncState<T> {
  data?: T
  isLoading: boolean
  error?: Error
}

function useAsyncData<T>(
  fetcher: () => Promise<T>
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    isLoading: true,
  })

  useEffect(() => {
    fetcher()
      .then(data => setState({ data, isLoading: false }))
      .catch(error => setState({ error, isLoading: false }))
  }, [])

  return state
}
```

---

## 📚 Learning Path

### Week 1: Understand the Ecosystem
1. Study **TanStack Table** documentation
2. Study **TanStack Query** documentation
3. Understand the differences

### Week 2: Study Real Projects
1. Clone **React-Advance-Table**
2. Read through the code structure
3. Understand the patterns used

### Week 3: Study Component Libraries
1. Explore **Ant Design** components folder
2. Explore **Chakra UI** components folder
3. Understand component composition

### Week 4: Build Your Own
1. Create a reusable Table component
2. Create a reusable Pagination component
3. Create a reusable Filter component
4. Integrate with React Query

---

## 🚀 Resources

### GitHub Repositories
- TanStack Table: https://github.com/TanStack/table
- TanStack Query: https://github.com/TanStack/query
- React-Advance-Table: https://github.com/mjm918/React-Advance-Table
- Ant Design: https://github.com/ant-design/ant-design
- Chakra UI: https://github.com/chakra-ui/chakra-ui

### Documentation
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- TanStack Table Docs: https://tanstack.com/table
- TanStack Query Docs: https://tanstack.com/query

### Articles
- "React Table Patterns" - LogRocket
- "Enterprise React Architecture" - Medium
- "Headless UI Components" - Dev.to

---

## 🎯 Summary

**For Professional Projects, Remember:**

✅ Use **TanStack Table** for table logic (headless)
✅ Use **TanStack Query** for data fetching & caching
✅ Use **TypeScript** for type safety
✅ Use **Custom Hooks** for logic reusability
✅ Use **Compound Components** for complex UI
✅ Use **Container/Presenter** pattern to separate concerns
✅ Make components **Generic** with TypeScript generics
✅ Structure code by **features**, not file types
✅ Use **proper error handling** patterns
✅ Write **tests** for critical components

This approach will make your code:
- 🔄 Highly reusable
- 🧪 Testable
- 📦 Maintainable
- 🚀 Scalable
- 👥 Collaborative
- 🎯 Professional

Happy building! 💻✨
