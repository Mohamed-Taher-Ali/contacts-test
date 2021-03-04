/*
router body wrapper to reduce redundancy
params::
controller is the controller based to wrapper
args are the arguments for the ctroller funtion serialized
*/
exports.routerWrapper = (controller, args=[]) => {
  return async (req, res) => {
    let values = args.map(arg => (
      arg.split('.').reduce((acc, val) => acc[val], req)
    ));
    
    try {
      let fireController = await controller(...values),
        status = fireController.error ? 400 : 200;

      res.status(status).send(fireController);

    } catch (err) {
      res.status(400).send(err);
    }
  };

}

//take the error then get object of error
exports.respError = (e) => {
  return { error: e }
}