class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let currentMin = this.stack.length === 0 ? val :  
                        Math.min(val, this.stack[this.stack.length-1].min)
        this.stack.push({
            val: val,
            min : currentMin
        })
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1].val
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length-1].min
    }
}
