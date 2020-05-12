function solution(arr){
    var ans = [];
    var checkId;
    var accountMoney = 0;
    for(let i = 0; i<arr.length; ++i){
        
        var list = arr[i].split(" ");
        var fun = list[0];
        var id = list[1];
        var num = Number(list[2]);
        console.log(accountMoney);
        if (fun === "CREATE" && checkId !== id){
            checkId = id;
            accountMoney += num;
            ans.push("200");
        }
        else if (fun === "CREATE" && checkId === id){
            ans.push("403");
        }

        if (fun === "DEPOSIT" && checkId === id){
            accountMondey += num;
            ans.push("200")
        }
        else if (fun === "DEPOSIT" && checkId !== id){
            ans.push("404");
        }


        if (fun === "WITHDRAW" && (accountMoney -= num)> 0){
            ans.push("200");
        }
        else if (fun === "WITHDRAW" && (accountMoney -= num) < 0){ 
            ans.push("403");
        }
    }
    return ans;
}

ans = solution(["DEPOSIT 3a 10000", "CREATE 3a 300000", "WITHDRAW 3a 150000", "WITHDRAW 3a 150001"]);
console.log(ans);