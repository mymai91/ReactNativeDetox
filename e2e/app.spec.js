describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  describe('Have not login yet', () => {
    it('should show up Login screen', async () => {
      await expect(element(by.id('login_title'))).toBeVisible()
    })

    // it('should redirect to Home screen when login successfully', async () => {
    //   await element(by.id('login_userName')).typeText('jany_mai')
    //   await element(by.id('login_password')).typeText('password')
    //   await element(by.id('login_button')).tap()
    //   await expect(element(by.id('home_title'))).toBeVisible()
    // })
  })

  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('appTitle'))).toBeVisible()
  // })

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
})

// describe('Login', () => {
//   beforeEach(async () => {
//     await device.reloadReactNative()
//   })
//   describe('when start app', () => {
//     it('should login successfully and show the map', async () => {
//       await expect(element(by.id('loginWelcome'))).toBeVisible()
//       await element(by.id('loginSubmitPhone')).tap()
//       await expect(element(by.id('loginAuthCode'))).toBeVisible()
//       await element(by.id('loginAuthField')).typeText('123456')
//       await element(
//         by.label('OK').and(by.type('_UIAlertControllerActionView'))
//       ).tap()
//       await expect(element(by.id('homeTitle'))).toBeVisible()
//     })
//     it('already login, should go to home straight', async () => {
//       await expect(element(by.id('homeTitle'))).toBeVisible()
//     })
//   })
// })
