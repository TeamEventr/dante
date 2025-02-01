Design pricinples

Tailwind ordering

position
width
height
z index


Routing

Static routes outside
No level 1 nesting, only 2 or higher


active link:
```tsx
const link = (
  <Link to="/blog/post">
    {({ isActive }) => {
      return (
        <>
          <span>My Blog Post</span>
          <icon className={isActive ? 'active' : 'inactive'} />
        </>
      )
    }}
  </Link>
)
```