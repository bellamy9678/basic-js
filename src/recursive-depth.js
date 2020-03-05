module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if ( Array.isArray(arr) ) {
            let maxdep = 1;
            for (let i = 0; i < arr.length; i++) {
                let dep = 1;
                dep += this.calculateDepth(arr[i]);
                if (dep > maxdep) {
                    maxdep = dep;
                }
            }
            return maxdep;
        } else {
            return 0;
        }
    }
};