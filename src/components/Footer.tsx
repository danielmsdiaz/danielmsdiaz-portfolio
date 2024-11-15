import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="bg-secondary py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-y-5">
            <Socials />
            <p className="text-muted-foreground">
              Copyright &copy; <span className="text-primary dark:text-darkMode">Daniel Diaz</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer