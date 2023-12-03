import Button from "@components/Button";
import Container from "@components/Container"
import MenuIcon from '@icons/menu.svg';

const Navigation = () => {

  return (
    <nav>
      <Container className="px-4 sm:px-0 max-h-14 sm:max-h-16 mx-auto flex items-center justify-between">
        <a href="/">
          <img src="/logo.svg" className="w-28 sm:w-36" alt="Bon Appetit" />
        </a>

        <div className="sm:hidden flex items-center">
          <Button>
            <img src={MenuIcon.src} className="w-6" alt="Menu" />
          </Button>
        </div>

        <div className="hidden font-cursive text-xl sm:flex justify-between gap-4">
          <a href="/order">Order</a>
          <a href="/order">About Us</a>
          <a href="/order">New Launches</a>
          <a href="/order">Bestsellers</a>
          <a href="/order">Cart</a>
        </div>

      </Container>
    </nav>
  )
}

export default Navigation