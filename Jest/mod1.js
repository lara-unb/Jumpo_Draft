const mod1 = {
    func1: (a) => a + 1,
    func2: (a, cb)=> a + cb(a)
}

module.exports = mod1