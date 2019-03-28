pragma solidity 0.4.15;

contract  patent {
    struct content{
            address owner;
            string poolid;
            //address[]  users;
            bool isValid;
    }

    event Deposit(address id,uint balance);
    event RegPatent(string id,address owner,string poolid);
    event Order(string id,uint price);
    event Transaction(string id,address owner);
    
    // 信息 信息注册 
    mapping (string=>content) private patentInfo;
    
    address private contractOwner;
    
    function patent() public{
        contractOwner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == contractOwner);
        _;
    }
    
    function regPatent (string id,address owner,string poolid) public onlyOwner returns (bool){
        if(patentInfo[id].isValid==false){
            content memory info = content(owner,poolid,true);
            patentInfo[id]=info;
            RegPatent(id,owner,poolid);
            return true;
        }
        else{
            return false;
        }
    } 
    
    function getPatentInfo (string id) constant public returns (address,string,bool){
        return (patentInfo[id].owner,patentInfo[id].poolid,patentInfo[id].isValid);
    }
    
    // 交易部分 
    
    mapping(string=>uint) private orderInfo;
    
    function uintToString(uint v) constant returns (string str) {
        uint maxlength = 100;
        bytes memory reversed = new bytes(maxlength);
        uint i = 0;
        while (v != 0) {
            uint remainder = v % 10;
            v = v / 10;
            reversed[i++] = byte(48 + remainder);
        }
        bytes memory s = new bytes(i + 1);
        for (uint j = 0; j <= i; j++) {
            s[j] = reversed[i - j];
        }
        str = string(s);
    }
    
    function makeOrder(string id,uint price) public{
        require(patentInfo[id].isValid==true);
        require(msg.sender==patentInfo[id].owner);
        orderInfo[id] = price;
        Order(id,price);
    }
    
    function cancelOrder(string id) public{
        require(patentInfo[id].isValid==true);
        require(msg.sender==patentInfo[id].owner);
        orderInfo[id] = 0;
    }
    
    //擦汗eck whether on sale,if not resturn -1
    function getOrder(string id) constant public returns(string){
        if(orderInfo[id]==0){
            return "-1";
        }
        else{
            return uintToString(orderInfo[id]);
        }
    }
    
    mapping(address=>uint) private balance;
    
    function deposit (address customer,uint amount) public onlyOwner(){
        balance[customer] += amount;
        Deposit(customer,balance[customer]);
    }
    
    function getBalance(address id) constant public returns(uint){
        return balance[id];
    }
    
    function transaction(string patentid) public returns (bool){
        uint price = orderInfo[patentid];
        if(orderInfo[patentid]>0&&getBalance(msg.sender)>=orderInfo[patentid]){
            balance[patentInfo[patentid].owner]+=price;
            balance[msg.sender]-=price;
            patentInfo[patentid].owner = msg.sender;
            Transaction(patentid,msg.sender);
            return true;
        }
        else{
            return false;
        }
    }
}