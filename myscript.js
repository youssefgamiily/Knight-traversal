console.log("Hello world")

table = document.querySelector(".table")
console.log(table)
cells = document.querySelectorAll("td")
let destinationForm = document.getElementById("destinationForm")
let startMsg = document.getElementById("startMessage")
let submitBtn = document.getElementById("submitBtn")
let destinationInput = document.getElementById("destination")
let currTarget_id
let curr_element


table.addEventListener("click", (e) => handleClick(e))

let svg = `<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:ns1="http://sozi.baierouge.fr" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg2429" viewBox="0 0 504 504" version="1.0" inkscape:version="0.91 r13725">
<g id="layer1" transform="translate(267.69 -489.52)">
<path id="path2452" style="fill:#000000" d="m155.21 472.75c-8.08-4.03-9.28-27.81-2.43-47.96 5.86-17.22 12.62-26.32 38.46-51.77 23.28-22.93 29.48-30.48 36.72-44.7 8.65-16.97 12.05-30.4 12.96-51.05 0.32-7.29 0.34-13.25 0.05-13.25s-5.2 2.85-10.9 6.34c-5.7 3.48-18.53 10.48-28.52 15.55-37.9 19.24-43.85 24.89-60.76 57.69-3.14 6.09-7.72 13.64-10.19 16.78-7.88 10.05-20.56 17.64-29.45 17.64-3.794 0-10.746-2.61-14.429-5.42-1.717-1.31-3.934-4.18-4.927-6.38-1.633-3.63-2.243-4.07-6.446-4.69-28.706-4.23-49.063-29.2-46.807-57.42 1.451-18.14 9.614-36.28 30.142-66.97 14.049-21 19.759-31.19 23.676-42.24 2.03-5.73 2.266-8.28 2.304-24.88l0.043-18.5 3.239-6.84c2.699-5.7 5.539-9.12 17.025-20.5 7.58-7.51 15.08-15.59 16.68-17.96l2.9-4.3-2.2-27.7c-3.02-38.182-3.03-38.083 3.18-40.693 4.23-1.778 4.02-1.877 35.99 17.358 14.75 8.874 27.16 16.135 27.58 16.135s8.32-8.09 17.56-17.978c13.92-14.899 17.39-18.09 20.26-18.628 6.11-1.146 7.55 0.899 19.98 28.219l11.4 25.044 6.2-0.909c8.91-1.305 30.6-0.154 41.86 2.22 20.46 4.311 40.77 13.106 57.21 24.772 10.98 7.79 28.66 25.67 36.84 37.26 17.69 25.05 30.51 53.08 42.26 92.42 20.17 67.54 32.6 146.52 32.93 209.29 0.1 19.77 0.06 20.27-2.17 22.5l-2.28 2.29-156.72 0.24c-123.65 0.19-157.25-0.02-159.22-1.01z" transform="translate(-267.69 489.52)"/>
<path id="path2390" style="fill:#ffffff" d="m155.79 67.859c-8.85-5.313-16.21-9.537-16.37-9.385-0.15 0.152 0.26 7.471 0.92 16.265l1.19 15.989 15.17-6.604 15.18-6.604-16.09-9.661z" transform="translate(-267.69 489.52)"/>
<path id="path2384" style="fill:#ffffff" d="m458.84 455.47c2.89-2.88 2.89-3.01-0.22-42.45-5.8-73.68-23.77-160.39-43.62-210.5-5.81-14.67-16.89-35.65-24.56-46.5-16.46-23.29-40.93-42.35-65.82-51.29-14.92-5.364-26.48-7.217-44.41-7.125-10.72 0.055-19.12 0.629-23.97 1.636-4.1 0.849-7.99 1.349-8.62 1.109-0.64-0.25-4.67-8.185-8.96-17.639-4.29-9.455-8.92-19.637-10.29-22.625l-2.48-5.435-15.59 16.102-15.59 16.101-27.17 11.691-27.16 11.695-6.55 8.77c-3.61 4.82-11.07 12.94-16.6 18.04-14.83 13.68-14.51 12.94-14.6 33.97-0.06 15.06-0.38 18.54-2.3 25-3.786 12.73-12.22 28.62-26.529 50-15.697 23.45-23.863 39.04-26.195 50.01-1.982 9.32-1.399 20.97 1.358 27.11 4.868 10.85 16.831 19.45 28.568 20.55l6.421 0.6 6.698-8.89c3.684-4.88 7.678-9.43 8.876-10.09 4.843-2.71 10.063-0.99 12.153 4 1.77 4.19 0.89 6.21-7.6 17.52-3.85 5.12-6.854 10.07-6.678 11 0.58 3.06 6.798 2.7 11.438-0.66 6.42-4.65 10.71-10.66 19.43-27.21 4.47-8.49 10.08-18.18 12.47-21.53 9.17-12.87 23.01-22.89 51.81-37.53 28.34-14.4 53.4-30.38 60.8-38.77 8.72-9.89 12.42-21.42 11.55-36.04-0.65-10.96 0.46-14.23 5.4-15.95 2.5-0.87 3.83-0.78 6.46 0.47 4.18 1.99 5.47 5.43 6.16 16.44 1.06 16.8-6.47 36.65-18.57 48.96l-6.64 6.76 0.8 6.37c1.2 9.5 0 31.09-2.3 41.38-4.54 20.28-13.07 39.59-24.24 54.84-3.31 4.53-15.67 17.74-27.74 29.66-21.53 21.27-27.76 28.8-32.65 39.5-3.12 6.8-5.33 17.26-5.36 25.25l-0.01 6.25h141.44c93.21 0 141.65 0.34 142.06 1 1.21 1.96 6.53 1.05 9.13-1.55z" transform="translate(-267.69 489.52)"/>
<path id="path2388" style="fill:#000000" d="m115.28 190.86c4.52-8.52 17.57-29.5 20.22-32.52 5.39-6.14 13.75-8.77 20.14-6.34 1.41 0.53 2.57 1.55 2.57 2.27 0 3.11-8.11 14.86-15.03 21.76-5.71 5.7-9.57 8.52-16 11.7-4.66 2.3-9.53 4.48-10.81 4.83-2.18 0.61-2.26 0.5-1.09-1.7z" transform="translate(-267.69 489.52)"/>
<path id="path2386" style="fill:#000000" d="m53.403 313.38c0.381-7.92 1.013-11.14 3.074-15.64 2.728-5.96 7.177-9.71 11.529-9.72 5.627-0.01 11.2 5.62 11.2 11.3 0 4.31-4.313 8.95-15.392 16.56l-10.892 7.48 0.481-9.98z" transform="translate(-267.69 489.52)"/>
</g>
<metadata>
<rdf:RDF>
    <cc:Work>
    <dc:format>image/svg+xml</dc:format>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/"/>
    <dc:publisher>
        <cc:Agent rdf:about="http://openclipart.org/">
        <dc:title>Openclipart</dc:title>
        </cc:Agent>
    </dc:publisher>
    <dc:title>Chess tile - Knight 2</dc:title>
    <dc:date>2006-12-26T00:00:00</dc:date>
    <dc:description/>
    <dc:source>https://openclipart.org/detail/18643/-by--18643</dc:source>
    <dc:creator>
        <cc:Agent>
        <dc:title>portablejim</dc:title>
        </cc:Agent>
    </dc:creator>
    </cc:Work>
    <cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/">
    <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/>
    <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/>
    <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/>
    </cc:License>
</rdf:RDF>
</metadata>
</svg>`

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
        this.AdjList = new Map()
    }
    addVertex(v) {
        this.AdjList.set(v, [])
    }
    addEdge(x,y){
        this.AdjList.get(x).push(y)
        this.AdjList.get(y).push(x)
    }
}

returnPointNeighbors = (pointID) => {
    let firstDigit = pointID[0]*1 
    let secondDigit = pointID[1]*1 
    let possibleNeighbors = [`${firstDigit-1}${secondDigit-1}`,`${firstDigit-1}${secondDigit}`,`${firstDigit-1}${secondDigit+1}`,`${firstDigit}${secondDigit-1}`,`${firstDigit}${secondDigit+1}`,`${firstDigit+1}${secondDigit-1}`,`${firstDigit+1}${secondDigit}`,`${firstDigit+1}${secondDigit+1}`]
    console.log(`possibleNeighbors are : `)
    console.log(possibleNeighbors)
    possibleNeighbors = possibleNeighbors.filter(Neighbor => {
        let firstDigit = pointID[0]*1 
        let secondDigit = pointID[1]*1 
        return Neighbor.length == 2 && (firstDigit> -1 && firstDigit < 8 && secondDigit > -1 && secondDigit < 8)
    })
 
    console.log(`possibleNeighbors are : `)
    console.log(possibleNeighbors)
    return possibleNeighbors
}

resetStyle = (element, styleProp) => {
    element.style.styleProp = ''
} 



handleClick = (e) => {
    e.preventDefault();
    console.log(e)
    if (e.target.tagName === "TD") {
        if (curr_element != null && curr_element != undefined ) {
            curr_element.removeAttribute('style');
            curr_element.innerHTML = ''
        }
        currTarget_id = e.target.id
        curr_element = document.getElementById(currTarget_id)
        console.log(curr_element)
        curr_element.style.backgroundColor ='red'
        curr_element.insertAdjacentHTML("beforeend", svg)
        let row  = currTarget_id[0]
        let col  = currTarget_id[1]
        curr_element.insertAdjacentHTML("afterbegin", `<h6>${row} ${col}</h6>`)
    }
    startMsg.style.display="none"
    destinationForm.style.display='flex'
}

findNeighbors = (id) => {
    console.log(`finding neighbors of ${id}`)
    i = Number(id[0])
    j = Number(id[1])
    console.log(`i is ${i} and j is ${j}`)
    let arr = [[i + 2, j + 1] ,[i - 2, j + 1],[i + 2, j - 1],[i - 2, j - 1],[i + 1, j + 2],[i + 1, j - 2],[i - 1, j + 2],[i - 1, j - 2]]
    let newArr = []
    for (elemArr of arr) {
        if (!(elemArr[0] > 7 || elemArr[1] >7 || elemArr[0] < 0 || elemArr[1] < 0 )){
            newArr.push(elemArr)
        }
    }
    console.log(newArr)
    return newArr
}

recursiveProcess = (start, recursive = false) => {
    let Neighbors = findNeighbors(start)
    let userDestination = destinationInput.value // 26
    let ArrToBeFound = [userDestination[0]*1, userDestination[1]*1]
    console.log(ArrToBeFound)
    if (Neighbors.some(neighbor => neighbor[0] === ArrToBeFound[0] && neighbor[1] === ArrToBeFound[1])) {
        console.log(`found destination`);
        path.push(userDestination);
    }
    else{
        console.log(`not found`)
        for (Neighbor of Neighbors) {
            let string = '' // [4,2]
            string+=Neighbor[0]
            string+=Neighbor[1]
            console.log(`string is ${string}`)
            recursiveProcess(string)
        }
    }
}

let path = new Set
checkIfNeighborExists = (Neighbors, ArrToBeFound) => { // [[4,2], [3,5]] -- [4,2]

    if (Neighbors.some(neighbor => neighbor[0] === ArrToBeFound[0] && neighbor[1] === ArrToBeFound[1])) {
        return true
    }
}

let visitedPoints = new Set
findPath = (point, pathSoFar) => { // first called with start point
    let Neighbors = findNeighbors (point)
    // base case
    let userDestination = destinationInput.value // 26
    let ArrToBeFound = [userDestination[0]*1, userDestination[1]*1]
    if (checkIfNeighborExists(Neighbors, ArrToBeFound)) {
        console.log("Found!!!")
        console.log(`point is`)
        console.log(point)
        pathSoFar.push(point)
        pathSoFar.push(userDestination)
        console.log(`path so far is: `)
        console.log(pathSoFar)
        return
    }
    
    console.log(`visitedPoints now adding`)
    console.log(point)
    visitedPoints.add(point)
    for (let Neighbor of Neighbors) {
        newpoint = `${Neighbor[0]}${Neighbor[1]}` //ex: '42'
        pathSoFar.push(newpoint)
        if (!visitedPoints.has(Neighbor)) {
            
            // let initialPath = [currTarget_id];
            // findPath(newpoint, initialPath)
            findPath(newpoint, pathSoFar)
        }
    }

    

}
beginDestinationSearch = (e) => {
    e.preventDefault();
    let userDestination = destinationInput.value // 26
    console.log(`userDestination is ${userDestination}`)
    destinationInput.innerHTML = ''
    // recursiveProcess(currTarget_id)
    path.add(`${currTarget_id[0]}${currTarget_id[1]}`)
    findPath(currTarget_id, [])
    console.log(path)
}

submitBtn.addEventListener("click", (e) => beginDestinationSearch(e))

