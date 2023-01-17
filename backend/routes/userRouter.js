//mountable route handler module
//loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.
const router=require("express").Router()
const userController=require("../controller/user.controller")
const errorHandler=require("../middleWare/errorHandler")

router.post('/userLogin',userController.login)
router.post('/userRegister',userController.register )
router.get('/userList', userController.loadDatabase);
router.put('/userUpdate',userController.update );
router.delete('/deleteUser', userController.delete );
//if no path matches
router.use(errorHandler.pathNotFound)
//export default router
module.exports = router