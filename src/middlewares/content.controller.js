export const validateContent = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res
      .status(404)
      .json({ error: "Error en la petición acrcloud_monitor" });
  }
  next();
};
