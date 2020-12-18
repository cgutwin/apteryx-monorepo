export default function serializeFormData(formDataObject) {
  const jsonFormData = {}
  formDataObject.forEach((value, key) => (jsonFormData[key] = value))
  return jsonFormData
}
