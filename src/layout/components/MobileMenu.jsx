import { Link } from 'react-router-dom'

const mobileMenuItems = [
  { label: 'Home', icon: 'house', path: '/' },
  { label: 'Favorite', icon: 'heart', path: '/favorite' },
  { label: 'Order', icon: 'basket', path: '/order' },
  { label: 'Setting', icon: 'gear', path: '/setting' },
  { label: 'Account', icon: 'person', path: '/account' },
]

export default function MobileMenu() {
  return (
    <nav className='position-fixed bottom-0 w-100 pb-2 px-2'>
      <div className='border rounded-5 py-2 px-3 mx-auto' style={{ maxWidth: '550px' }}>
        <div className='d-flex flex-row justify-content-between'>

          {mobileMenuItems.map((item) => {
            return (
              <div key={item.label}>
                <Link className='text-dark' to={item.path}>
                  <i className={`bi fs-3 bi-${item.icon}`}></i>
                  {/* {item.label} */}
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </nav>
  )
}
