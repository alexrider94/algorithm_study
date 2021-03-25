function solution(array){
    const labels = {
        Enter:"들어왔습니다.",
        Leave:"나갔습니다."
    }

    const names = array
        .filter(value => value.substr(0,5) !== "Leave")
        .reduce((names, line) => {
            let [command, uid, name] = line.split(" ");
            if(command == "Leave" | !name) return names;
            names[uid] = name;
            return names;
        },{});

    return array
            .filter(x => x.substr(0,6) !== "Change")
            .reduce((results, line) => {
                let [command, uid] = line.split(" ");
                results.push(`${names[uid]}님이 ${labels[command]}`);

                return results;
            }, []);
}

console.log(solution(["Enter phila1 hyojin","Leave phila1 hyojin","Change phila1 alexrider"]));