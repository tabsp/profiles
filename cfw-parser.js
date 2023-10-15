module.exports.parse = async (raw, { axios, yaml, notify, console }) => {
    const obj = yaml.parse(raw)
    obj.rules.unshift("DOMAIN-SUFFIX,vercel.app,Proxies")
    obj.rules.unshift("DOMAIN-SUFFIX,cloudflare.com,Proxies")
    return yaml.stringify(obj)
}
