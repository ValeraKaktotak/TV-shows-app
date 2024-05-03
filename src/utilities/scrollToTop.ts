export const scrollToTop = () => {
  const element = document.getElementById('root')
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }
}
