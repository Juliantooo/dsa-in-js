
class MaxBinaryHeaps{
    constructor(){
        this.values=[41,39,33,18,27,12]
    }

    swap(idx1,idx2){
        [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]]
    }

    insert(val){
        this.values.push(val)
        this.bubbleUp()
        return this.values
    }

    bubbleUp(){
        let idx = this.values.length - 1
        const val = this.values[idx]
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2)
            let parentVal = this.values[parentIdx]
            if(val<=parentVal) break;

            this.swap(idx,parentIdx)
            idx = parentIdx
        }
    }

    remove(){
        if(this.values.length>0){
            let idx=this.values.length-1
            this.swap(0,idx)
            const oldRoot = this.values.pop()
            this.shinkDown()
            console.log(this.values)
            return oldRoot
        }
    }

    shinkDown(){
        let parentIndex = 0
        let parentVal = this.values[parentIndex]
        while(true){
            let leftChildIdx = (parentIndex*2)+1
            let leftChildVal = this.values[leftChildIdx] 

            let rightChildIdx = (parentIndex*2)+2
            let rightChildVal = this.values[rightChildIdx] 

            if(leftChildIdx>=this.values.length || rightChildIdx>=this.values.length) break;
            if(leftChildVal>rightChildVal && parentVal < leftChildVal){
                this.swap(parentIndex,leftChildIdx)
                parentIndex = leftChildIdx
            }else if(rightChildVal>leftChildVal && parentVal < rightChildVal){
                this.swap(parentIndex,rightChildIdx)
                parentIndex=rightChildIdx
            }
        }
    }
}


const heap = new MaxBinaryHeaps()
 
heap.insert(55)
heap.insert(1)
heap.insert(45)
heap.insert(29)
heap.insert(200)

console.log(heap.remove())
// [27, 55, 41, 39, 45, 12, 33,  1, 18]