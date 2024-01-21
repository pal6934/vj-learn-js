// const newArr = ['Red','Black','White','Green']

// const fn = (item) => {console.log(item)}

// newArr.forEach(fn)

const obj = [
    {
        LanguageName : 'JS',
        LanguageDetail : 'JavaScript'
    },
    {
        LanguageName : 'Java',
        LanguageDetail : 'Java'
    },
    {
        LanguageName : 'Py',
        LanguageDetail : 'Pythan'
    }
]

obj.forEach( (items) => {
    console.log(`${items.LanguageName} = ${items.LanguageDetail}`)
})