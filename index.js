// features
const features = [
    "Unlimited websites",
    "100% data ownership",
    "Email reports"
]

const ranges = {
    1: { pv: `10K`,   price: 8 },
    2: { pv: `50K`,   price: 12 },
    3: { pv: `100K`,  price: 16 },
    4: { pv: `500K`,  price: 24 },
    5: { pv: `1M`,    price: 36 },
}

// elements
const featuresList = document.querySelector('.features')
const slider       = document.querySelector('.range')
const toggle       = document.querySelector('#switch')
const pageviews    = document.querySelector('.pageviews')
const priceVal     = document.querySelector('.price-value')

// funcs
const generateFeatures = (features) => {
    const lis = document.createDocumentFragment()
    features.forEach((ftr) => {
        const li = document.createElement('li')
        li.textContent = ftr
        lis.append(li)
    })
    return lis
}

const getPageviews = (pv) => {
    return `${pv} PAGEVIEWS`
}

const changePrice = (e) => {
    const data = ranges[e.target.value]
    pageviews.textContent = getPageviews(data.pv)
    priceVal.textContent = `$${data.price}`
}

const toggleYearly = (e) => {
    const data = ranges[slider.value]
    const yearly = e.target.checked
    priceVal.textContent = `$${ yearly ? data.price / 4 * 3 : data.price }`
}

// main
featuresList.append(generateFeatures(features))
slider.addEventListener('change', changePrice)
toggle.addEventListener('change', toggleYearly)
slider.dispatchEvent(new Event('change'))