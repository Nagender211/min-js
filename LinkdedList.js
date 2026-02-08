
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
    push(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let temp=this.head
        let prev=this.head
        while(temp.next){
            prev=temp
            temp=temp.next
        }
        this.tail=prev
        this.tail.next=null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return this
    }
    unshift(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
        return this
    }
    shift(){
        if(!this.head) return undefined
        let temp=this.head
        this.head=this.head.next
        temp.next=null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return this
    }
    middle(){
        let fast=this.head
        let slow=this.head
        while(fast && fast.next){
            slow=this.next
            fast=fast.next.next
        }
        console.log("slow number",slow)
        return slow

    }
}
const myLinkdeList=new LinkdedList(5)
console.log(myLinkdeList.push(3))
console.log(myLinkdeList.push(4))
console.log(myLinkdeList.push(6))
console.log("middle number",myLinkdeList.middle())

console.log("total linkded My list",myLinkdeList)
