const numAndSds = [
	"97.7 ± 0.6",
	"97.05 ± 0.10",
	"97.15 ± 0.09",
	"97.13 ± 0.08",
	"98.1 ± 0.4",
	"98.05 ± 0.04",
	"99.3 ± 0.3",
]

const returnSds = () => {
	sdList = []
	for (let i of numAndSds) {
		let splitString = i.split(" ")
		sdList.push(Number(splitString[2]))
	}
	console.log(sdList)
}

returnSds()
