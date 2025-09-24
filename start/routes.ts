import router from '@adonisjs/core/services/router'

router.get('/', async ({ view }) => {
  return view.render('pages/dashboard')
})
router.post('/purchase-requests', '#controllers/purchase_requests_controller.storePurchaseRequest')
