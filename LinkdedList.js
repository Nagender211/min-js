
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkdedList{
    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=newNode
        this.length=1
    }
    
}
const myLinkdeList=new LinkdedList(6)
console.log(myLinkdeList)