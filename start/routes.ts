import router from '@adonisjs/core/services/router'

router.get('/', '#controllers/purchase_requests_view_controller.displayAllPurchaseRequestData')
router.post('/purchase-requests', '#controllers/purchase_requests_api_controller.storePurchaseRequest')
