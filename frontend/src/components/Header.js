import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import './Style/Header.css'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <svg width="124" height="69" viewBox="0 0 124 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.0525 3.23945C46.0336 3.25834 46.0194 5.27945 46.0194 7.72556V12.1786L45.3017 12.1928L44.5792 12.207L44.565 13.0664L44.5556 13.9306H45.2875H46.0194V29.6556V45.3806H46.9403H47.8611L47.8706 30.685L47.8847 15.9847L49.6225 17.7367L51.3556 19.4886L50.9919 20.027C49.5375 22.1708 48.6639 24.4895 48.3003 27.1528C48.1775 28.0547 48.1822 30.26 48.3003 31.1667C48.7772 34.6895 50.1986 37.7069 52.5928 40.2664C55.1192 42.9675 58.3586 44.6533 62.1222 45.22C62.7644 45.3192 63.1469 45.3428 64.3086 45.3664L65.7111 45.3947V39.6242V33.8489L71.9822 40.0822L78.2486 46.3203L78.6972 45.8858C78.9428 45.645 79.2308 45.3617 79.33 45.2483L79.5142 45.0453L79.3442 44.8706L79.1694 44.6911V29.3108V13.9306H80.0903H81.0111V13.057V12.1833H80.0903H79.1694V7.69723V3.21112H78.2722H77.375V7.69723V12.1833H62.6181H47.8611L47.8517 7.70668L47.8375 3.23473L46.9592 3.22057C46.4775 3.21584 46.0714 3.22528 46.0525 3.23945ZM58.2028 14.162C56.9797 14.6672 55.8086 15.3378 54.7414 16.1311C54.0803 16.627 53.065 17.5053 52.7675 17.8453L52.5597 18.0767L50.7464 16.2775C49.75 15.2858 48.8197 14.3508 48.6733 14.1997L48.4136 13.9306H53.5797L58.7458 13.9353L58.2028 14.162ZM77.375 28.4136C77.375 36.3753 77.3608 42.8778 77.3419 42.8589C77.3183 42.84 74.6975 40.2192 71.51 37.0317L65.7111 31.2375V22.5864V13.9306H71.5431H77.375V28.4136ZM63.9167 22.0622V29.4431L62.4669 28.0028C61.6642 27.2094 59.3881 24.9333 57.4 22.9406L53.7875 19.3139L54.1417 18.955C56.1108 16.9481 58.7411 15.5314 61.5556 14.9695C62.1978 14.842 63.265 14.705 63.7183 14.6908L63.9167 14.6861V22.0622ZM63.9167 37.8344V43.6333H63.7986C63.52 43.6333 62.2497 43.4822 61.7681 43.3925C59.4731 42.9675 57.3811 42.0278 55.5489 40.6111C52.3708 38.1508 50.3592 34.4864 49.9814 30.4914C49.9106 29.7169 49.9483 27.8233 50.0522 27.1764C50.4347 24.7728 51.1289 22.9689 52.4464 20.9808L52.6069 20.7353L58.2642 26.3878L63.9167 32.0403V37.8344Z" fill="black" />
                <path d="M6.072 55.636V56.524H3.792V64H2.7V56.524H0.408V55.636H6.072ZM10.6802 57.304C11.1762 57.304 11.6242 57.412 12.0242 57.628C12.4242 57.836 12.7362 58.152 12.9602 58.576C13.1922 59 13.3082 59.516 13.3082 60.124V64H12.2282V60.28C12.2282 59.624 12.0642 59.124 11.7362 58.78C11.4082 58.428 10.9602 58.252 10.3922 58.252C9.81619 58.252 9.35619 58.432 9.01219 58.792C8.67619 59.152 8.50819 59.676 8.50819 60.364V64H7.41619V55.12H8.50819V58.36C8.72419 58.024 9.02019 57.764 9.39619 57.58C9.78019 57.396 10.2082 57.304 10.6802 57.304ZM21.092 60.46C21.092 60.668 21.08 60.888 21.056 61.12H15.8C15.84 61.768 16.06 62.276 16.46 62.644C16.868 63.004 17.36 63.184 17.936 63.184C18.408 63.184 18.8 63.076 19.112 62.86C19.432 62.636 19.656 62.34 19.784 61.972H20.96C20.784 62.604 20.432 63.12 19.904 63.52C19.376 63.912 18.72 64.108 17.936 64.108C17.312 64.108 16.752 63.968 16.256 63.688C15.768 63.408 15.384 63.012 15.104 62.5C14.824 61.98 14.684 61.38 14.684 60.7C14.684 60.02 14.82 59.424 15.092 58.912C15.364 58.4 15.744 58.008 16.232 57.736C16.728 57.456 17.296 57.316 17.936 57.316C18.56 57.316 19.112 57.452 19.592 57.724C20.072 57.996 20.44 58.372 20.696 58.852C20.96 59.324 21.092 59.86 21.092 60.46ZM19.964 60.232C19.964 59.816 19.872 59.46 19.688 59.164C19.504 58.86 19.252 58.632 18.932 58.48C18.62 58.32 18.272 58.24 17.888 58.24C17.336 58.24 16.864 58.416 16.472 58.768C16.088 59.12 15.868 59.608 15.812 60.232H19.964ZM32.1766 55.636V64H31.0846V60.208H26.8246V64H25.7326V55.636H26.8246V59.308H31.0846V55.636H32.1766ZM40.0412 60.46C40.0412 60.668 40.0292 60.888 40.0052 61.12H34.7492C34.7892 61.768 35.0092 62.276 35.4092 62.644C35.8172 63.004 36.3092 63.184 36.8852 63.184C37.3572 63.184 37.7492 63.076 38.0612 62.86C38.3812 62.636 38.6052 62.34 38.7332 61.972H39.9092C39.7332 62.604 39.3812 63.12 38.8532 63.52C38.3252 63.912 37.6692 64.108 36.8852 64.108C36.2612 64.108 35.7012 63.968 35.2052 63.688C34.7172 63.408 34.3332 63.012 34.0532 62.5C33.7732 61.98 33.6332 61.38 33.6332 60.7C33.6332 60.02 33.7692 59.424 34.0412 58.912C34.3132 58.4 34.6932 58.008 35.1812 57.736C35.6772 57.456 36.2452 57.316 36.8852 57.316C37.5092 57.316 38.0612 57.452 38.5412 57.724C39.0212 57.996 39.3892 58.372 39.6452 58.852C39.9092 59.324 40.0412 59.86 40.0412 60.46ZM38.9132 60.232C38.9132 59.816 38.8212 59.46 38.6372 59.164C38.4532 58.86 38.2012 58.632 37.8812 58.48C37.5692 58.32 37.2212 58.24 36.8372 58.24C36.2852 58.24 35.8132 58.416 35.4212 58.768C35.0372 59.12 34.8172 59.608 34.7612 60.232H38.9132ZM41.0746 60.688C41.0746 60.016 41.2106 59.428 41.4826 58.924C41.7546 58.412 42.1266 58.016 42.5986 57.736C43.0786 57.456 43.6106 57.316 44.1946 57.316C44.7706 57.316 45.2706 57.44 45.6946 57.688C46.1186 57.936 46.4346 58.248 46.6426 58.624V57.424H47.7466V64H46.6426V62.776C46.4266 63.16 46.1026 63.48 45.6706 63.736C45.2466 63.984 44.7506 64.108 44.1826 64.108C43.5986 64.108 43.0706 63.964 42.5986 63.676C42.1266 63.388 41.7546 62.984 41.4826 62.464C41.2106 61.944 41.0746 61.352 41.0746 60.688ZM46.6426 60.7C46.6426 60.204 46.5426 59.772 46.3426 59.404C46.1426 59.036 45.8706 58.756 45.5266 58.564C45.1906 58.364 44.8186 58.264 44.4106 58.264C44.0026 58.264 43.6306 58.36 43.2946 58.552C42.9586 58.744 42.6906 59.024 42.4906 59.392C42.2906 59.76 42.1906 60.192 42.1906 60.688C42.1906 61.192 42.2906 61.632 42.4906 62.008C42.6906 62.376 42.9586 62.66 43.2946 62.86C43.6306 63.052 44.0026 63.148 44.4106 63.148C44.8186 63.148 45.1906 63.052 45.5266 62.86C45.8706 62.66 46.1426 62.376 46.3426 62.008C46.5426 61.632 46.6426 61.196 46.6426 60.7ZM50.684 55.12V64H49.592V55.12H50.684ZM53.8771 58.324V62.2C53.8771 62.52 53.9451 62.748 54.0811 62.884C54.2171 63.012 54.4531 63.076 54.7891 63.076H55.5931V64H54.6091C54.0011 64 53.5451 63.86 53.2411 63.58C52.9371 63.3 52.7851 62.84 52.7851 62.2V58.324H51.9331V57.424H52.7851V55.768H53.8771V57.424H55.5931V58.324H53.8771ZM60.1802 57.304C60.6762 57.304 61.1242 57.412 61.5242 57.628C61.9242 57.836 62.2362 58.152 62.4602 58.576C62.6922 59 62.8082 59.516 62.8082 60.124V64H61.7282V60.28C61.7282 59.624 61.5642 59.124 61.2362 58.78C60.9082 58.428 60.4602 58.252 59.8922 58.252C59.3162 58.252 58.8562 58.432 58.5122 58.792C58.1762 59.152 58.0082 59.676 58.0082 60.364V64H56.9162V55.12H58.0082V58.36C58.2242 58.024 58.5202 57.764 58.8962 57.58C59.2802 57.396 59.7082 57.304 60.1802 57.304ZM70.256 57.424L66.296 67.096H65.168L66.464 63.928L63.812 57.424H65.024L67.088 62.752L69.128 57.424H70.256ZM81.1289 64H80.0369L75.6449 57.34V64H74.5529V55.624H75.6449L80.0369 62.272V55.624H81.1289V64ZM88.8224 57.424V64H87.7304V63.028C87.5224 63.364 87.2304 63.628 86.8544 63.82C86.4864 64.004 86.0784 64.096 85.6304 64.096C85.1184 64.096 84.6584 63.992 84.2504 63.784C83.8424 63.568 83.5184 63.248 83.2784 62.824C83.0464 62.4 82.9304 61.884 82.9304 61.276V57.424H84.0104V61.132C84.0104 61.78 84.1744 62.28 84.5024 62.632C84.8304 62.976 85.2784 63.148 85.8464 63.148C86.4304 63.148 86.8904 62.968 87.2264 62.608C87.5624 62.248 87.7304 61.724 87.7304 61.036V57.424H88.8224ZM91.9982 58.324V62.2C91.9982 62.52 92.0662 62.748 92.2022 62.884C92.3382 63.012 92.5742 63.076 92.9102 63.076H93.7142V64H92.7302C92.1222 64 91.6662 63.86 91.3622 63.58C91.0582 63.3 90.9062 62.84 90.9062 62.2V58.324H90.0542V57.424H90.9062V55.768H91.9982V57.424H93.7142V58.324H91.9982ZM94.6293 60.7C94.6293 60.02 94.7653 59.428 95.0373 58.924C95.3093 58.412 95.6853 58.016 96.1653 57.736C96.6533 57.456 97.2093 57.316 97.8333 57.316C98.6413 57.316 99.3053 57.512 99.8253 57.904C100.353 58.296 100.701 58.84 100.869 59.536H99.6933C99.5813 59.136 99.3613 58.82 99.0333 58.588C98.7133 58.356 98.3133 58.24 97.8333 58.24C97.2093 58.24 96.7053 58.456 96.3213 58.888C95.9373 59.312 95.7453 59.916 95.7453 60.7C95.7453 61.492 95.9373 62.104 96.3213 62.536C96.7053 62.968 97.2093 63.184 97.8333 63.184C98.3133 63.184 98.7133 63.072 99.0333 62.848C99.3533 62.624 99.5733 62.304 99.6933 61.888H100.869C100.693 62.56 100.341 63.1 99.8133 63.508C99.2853 63.908 98.6253 64.108 97.8333 64.108C97.2093 64.108 96.6533 63.968 96.1653 63.688C95.6853 63.408 95.3093 63.012 95.0373 62.5C94.7653 61.988 94.6293 61.388 94.6293 60.7ZM101.918 60.688C101.918 60.016 102.054 59.428 102.326 58.924C102.598 58.412 102.97 58.016 103.442 57.736C103.922 57.456 104.454 57.316 105.038 57.316C105.614 57.316 106.114 57.44 106.538 57.688C106.962 57.936 107.278 58.248 107.486 58.624V57.424H108.59V64H107.486V62.776C107.27 63.16 106.946 63.48 106.514 63.736C106.09 63.984 105.594 64.108 105.026 64.108C104.442 64.108 103.914 63.964 103.442 63.676C102.97 63.388 102.598 62.984 102.326 62.464C102.054 61.944 101.918 61.352 101.918 60.688ZM107.486 60.7C107.486 60.204 107.386 59.772 107.186 59.404C106.986 59.036 106.714 58.756 106.37 58.564C106.034 58.364 105.662 58.264 105.254 58.264C104.846 58.264 104.474 58.36 104.138 58.552C103.802 58.744 103.534 59.024 103.334 59.392C103.134 59.76 103.034 60.192 103.034 60.688C103.034 61.192 103.134 61.632 103.334 62.008C103.534 62.376 103.802 62.66 104.138 62.86C104.474 63.052 104.846 63.148 105.254 63.148C105.662 63.148 106.034 63.052 106.37 62.86C106.714 62.66 106.986 62.376 107.186 62.008C107.386 61.632 107.486 61.196 107.486 60.7ZM112.764 64.108C112.26 64.108 111.808 64.024 111.408 63.856C111.008 63.68 110.692 63.44 110.46 63.136C110.228 62.824 110.1 62.468 110.076 62.068H111.204C111.236 62.396 111.388 62.664 111.66 62.872C111.94 63.08 112.304 63.184 112.752 63.184C113.168 63.184 113.496 63.092 113.736 62.908C113.976 62.724 114.096 62.492 114.096 62.212C114.096 61.924 113.968 61.712 113.712 61.576C113.456 61.432 113.06 61.292 112.524 61.156C112.036 61.028 111.636 60.9 111.324 60.772C111.02 60.636 110.756 60.44 110.532 60.184C110.316 59.92 110.208 59.576 110.208 59.152C110.208 58.816 110.308 58.508 110.508 58.228C110.708 57.948 110.992 57.728 111.36 57.568C111.728 57.4 112.148 57.316 112.62 57.316C113.348 57.316 113.936 57.5 114.384 57.868C114.832 58.236 115.072 58.74 115.104 59.38H114.012C113.988 59.036 113.848 58.76 113.592 58.552C113.344 58.344 113.008 58.24 112.584 58.24C112.192 58.24 111.88 58.324 111.648 58.492C111.416 58.66 111.3 58.88 111.3 59.152C111.3 59.368 111.368 59.548 111.504 59.692C111.648 59.828 111.824 59.94 112.032 60.028C112.248 60.108 112.544 60.2 112.92 60.304C113.392 60.432 113.776 60.56 114.072 60.688C114.368 60.808 114.62 60.992 114.828 61.24C115.044 61.488 115.156 61.812 115.164 62.212C115.164 62.572 115.064 62.896 114.864 63.184C114.664 63.472 114.38 63.7 114.012 63.868C113.652 64.028 113.236 64.108 112.764 64.108ZM122.705 60.46C122.705 60.668 122.693 60.888 122.669 61.12H117.413C117.453 61.768 117.673 62.276 118.073 62.644C118.481 63.004 118.973 63.184 119.549 63.184C120.021 63.184 120.413 63.076 120.725 62.86C121.045 62.636 121.269 62.34 121.397 61.972H122.573C122.397 62.604 122.045 63.12 121.517 63.52C120.989 63.912 120.333 64.108 119.549 64.108C118.925 64.108 118.365 63.968 117.869 63.688C117.381 63.408 116.997 63.012 116.717 62.5C116.437 61.98 116.297 61.38 116.297 60.7C116.297 60.02 116.433 59.424 116.705 58.912C116.977 58.4 117.357 58.008 117.845 57.736C118.341 57.456 118.909 57.316 119.549 57.316C120.173 57.316 120.725 57.452 121.205 57.724C121.685 57.996 122.053 58.372 122.309 58.852C122.573 59.324 122.705 59.86 122.705 60.46ZM121.577 60.232C121.577 59.816 121.485 59.46 121.301 59.164C121.117 58.86 120.865 58.632 120.545 58.48C120.233 58.32 119.885 58.24 119.501 58.24C118.949 58.24 118.477 58.416 118.085 58.768C117.701 59.12 117.481 59.608 117.425 60.232H121.577Z" fill="black" />
              </svg>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              {userInfo ? (
                <NavDropdown title={<span className='navLinks'>{userInfo.name}</span>} style={{ 'margin-right': '0px' }} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className='navLinks'>
                    <i className='fas fa-user'></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to='/cart'>
                <Nav.Link className='navLinks'>
                  My Cart
                  <svg className='cart' width="17" height="17" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.32204 4.87499L6.94954 1.32166C6.84663 1.17 6.67329 1.09416 6.49996 1.09416C6.32663 1.09416 6.15329 1.17 6.05038 1.32708L3.67788 4.87499H1.08329C0.785376 4.87499 0.541626 5.11874 0.541626 5.41666C0.541626 5.46541 0.547043 5.51416 0.563293 5.56291L1.93913 10.5842C2.06371 11.0392 2.48079 11.375 2.97913 11.375H10.0208C10.5191 11.375 10.9362 11.0392 11.0662 10.5842L12.442 5.56291L12.4583 5.41666C12.4583 5.11874 12.2145 4.87499 11.9166 4.87499H9.32204ZM4.87496 4.87499L6.49996 2.49166L8.12496 4.87499H4.87496ZM6.49996 9.20833C5.90413 9.20833 5.41663 8.72083 5.41663 8.12499C5.41663 7.52916 5.90413 7.04166 6.49996 7.04166C7.09579 7.04166 7.58329 7.52916 7.58329 8.12499C7.58329 8.72083 7.09579 9.20833 6.49996 9.20833Z" fill="black" />
                  </svg>
                </Nav.Link>
              </LinkContainer>
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title={<span className='navLinks'>Admin</span>} id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
