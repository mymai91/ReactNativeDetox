describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  describe('Have not login yet', () => {
    it('should show up Login screen', async () => {
      await expect(element(by.id('login_title'))).toBeVisible()
    })

    it('should redirect to Home screen when login successfully', async () => {
      await expect(element(by.id('login_userName'))).toBeVisible()
      await element(by.id('login_userName')).typeText('janymai')
      await element(by.id('login_password')).typeText('password')
      await element(by.id('login_button')).tap()
      await expect(element(by.id('home_title'))).toBeVisible()
    })
  })
})
