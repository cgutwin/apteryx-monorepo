// Takes a form object and turns it into JSON.S
function serializeFormData(formDataObject) {
  const jsonFormData = {}
  formDataObject.forEach((value, key) => (jsonFormData[key] = value))
  return jsonFormData
}

export default serializeFormData
