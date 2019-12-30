export const isLoggedIn = buyer => {
  return !!(buyer?.buyerId && Object.keys(buyer).length > 0)
}
