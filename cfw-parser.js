module.exports.parse = async (raw, { axios, yaml, notify, console }) => {
    const obj = yaml.parse(raw)
    obj.rules.unshift("DOMAIN-SUFFIX,vercel.app,Proxies")
    return yaml.stringify(obj)
}