
document.addEventListener("DOMContentLoaded", () => {


//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" CONSTS
  
const buttFill = document.getElementById("buttFill");

const plusP = document.getElementById("plusP");
const minusP = document.getElementById("minusP");

const plusC = document.getElementById("plusC");
const minusC = document.getElementById("minusC");

const displayP = document.getElementById("displayP");
const displayC = document.getElementById("displayC");

const imgP = document.getElementById("imgP");
const imgC = document.getElementById("imgC");

const divP = document.getElementById("divP");
const divC = document.getElementById("divC");

const adjustmentButt = document.getElementById("adjustmentButt");
const menuButt = document.getElementById("menu");
const setButt = document.getElementById("settButt");
const divMenu = document.getElementById("divMenu");
const divSet = document.getElementById("divSet");


const score = document.getElementById("score");


//------------------------------ Load canvas consts

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const blob = new Image();
blob.src = "blob.png"; 	

const plate = new Image();
plate.src = "plate.png"; 	

const lockedPlate = new Image();
lockedPlate.src = "lockedPlate.png"; 	

const unlockPlate = new Image();
unlockPlate.src = "unlockPlate.png"; 

// -----buttons canvas

const buttons = document.getElementById("buttons");
const buttonsCtx = buttons.getContext("2d");

const plus = new Image();
plus.src = "plus.png"; 	

	

  const c1 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c2 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c3 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c4 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c5 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c6 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c7 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c8 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c9 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c10 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c11 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c12 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c13 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c14 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c15 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c16 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c17 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c18 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c19 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c20 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c21 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c22 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c23 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c24 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c25 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c26 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c27 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c28 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c29 = ["0","0","0","0","0","0","0","0","0","0","0","0"];
  const c30 = ["0","0","0","0","0","0","0","0","0","0","0","0"];

const c = [null, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30];


function clear() {
    c[1] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[2] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[3] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[4] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[5] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[6] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[7] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[8] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[9] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[10] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[11] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[12] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[13] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[14] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[15] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[16] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[17] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[18] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[19] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[20] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[21] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[22] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[23] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[24] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[25] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[26] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[27] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[28] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[29] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    c[30] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    showConfirmClearButt();
    lastColor = 14;
    lastPlate = 12;
    score = 0;
    updatePL();
    update();
}


  const p1 = [1,1,1,1,1,1];
  const p2 = [1,1,1,1,1,1];
  const p3 = [0,0,0,0,0,0];
  const p4 = [0,0,0,0,0,0];
  const p5 = [0,0,0,0,0,0];

const PL = [null, p1, p2, p3, p4, p5];

let selected = "";

let lastPlate;

let lastColor = 14;



let showButts = 0;

let showAdjustment = 0;

let showConfirmButt = 0;

let showMenuButt = 0;

let showSetButt = 0;



let points = 0;

score.textContent = 0;



//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" STORAGE

function getKeys() {
	chrome.storage.local.get( "points", (R) => {
		if (R) {
		points = R.points;
		console.log(R.points);
		score.textContent = points;
		}
	});
	chrome.storage.local.get( "lastPlate", (R) => {
		if (R) {
		lastPlate = R.lastPlate;
		console.log(R.lastPlate);
		updatePL();
		}
	});
	chrome.storage.local.get( "lastColor", (R) => {
		if (R) {
		lastColor = R.lastColor;
		console.log(R.lastColor);
		}
	});
	chrome.storage.local.get( "C", (R) => {
		if (R) {
			let i = 0;
			do {
				i+= 1;
				c[i] = R.C[i];
			} while (i < 30);
		update();
		}
	});
}




// .  .  .  .  .  

function setKey() {
  const S = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

	chrome.storage.local.set({ C: ["null", c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15], c[16], c[17], c[18], c[19], c[20], c[21], c[22], c[23], c[24], c[25], c[26], c[27], c[28], c[29], c[30] ] });
     	chrome.storage.local.set({ lastPlate: lastPlate });
     	chrome.storage.local.set({ lastColor: lastColor });
     	chrome.storage.local.set({ points: points });

  	chrome.storage.local.get( "C", (r1) => {
		chrome.storage.local.get( "points", (r2) => {
				chrome.storage.local.get( "lastPlate", (r3) => {
						chrome.storage.local.get( "lastColor", (r4) => {
							console.log("Storage: ", r1, r2, r3, r4);
							loadingAnimation(2);
  						});
  				});
		});
	});
} 




//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" LOGIC

//------------------------------ ONLOAD

window.addEventListener("load", () => {
    fitGame();
    window.addEventListener("resize", fitGame);
    buttons.addEventListener("click", () => {
        console.log("fill button clicked. 'buttons' in html");
        fillClicked();
    });
    loadingAnimation(1);

});



plate.onload = () => {
  console.log("plate loaded");
  lastPlate = 12;
  clearAll();

  getKeys();

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    console.log(mouseX + " " +mouseY);
    mouseDetectX1(mouseX, mouseY);
  });

  window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
      console.log("spacebar");
      fillClicked();
    }
  });
drawPlus(0);
};

const canvas_one = document.getElementById("gameCanvas");
const wrapper = document.getElementById("gameWrapper");

function fitGame() {

    const availableWidth = window.innerWidth;

    const availableHeight =
        window.innerHeight - canvas_one.offsetTop;

    const scale = Math.min(
        availableWidth / 300,
        availableHeight / 582
    );

    wrapper.style.transform = `scale(${scale})`;
}

window.addEventListener("load", () => {
    fitGame();
    window.addEventListener("resize", fitGame);


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: SMALL FUNCTIONS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function updatePL() {
	let i = 0
	do {
		i += 1;
		if (lastPlate < i) {
  			PL[rowFrom(i)][colFrom(i)] = 0;
		} else {
			PL[rowFrom(i)][colFrom(i)] = 1;
		}
	} while(i < 30)
	console.log("-> PL: ", PL[1], PL[2], PL[3], PL[4], PL[5]);
	update();
};


function update() {
  canvasUpdate();
  displayP.textContent = lastPlate;
  displayC.textContent = lastColor - 1;
}

 // .  .  .  .  .  


function colFrom(N) {
  return blobX[N] / 50;
  
} 
 // .  .  .  .  .  
function rowFrom(N) {
 return Math.ceil(N / 6);
}

// .  .  .  .  .  

function emptys(C) {
    array = c[C];
    res = 0;
    for (let p = 0; p <= 11; p++) {
      if (array[p] === "0") {
        res += 1;
        }  
    } return res;
}

// .  .  .  .  .   

function floorEmptys(N) {
let t = 0
    for (let i = 1; i <= 12; i++) {
    t += emptys(i);
    }
    if (t < N) {
    return t;
    } else {
    return N;
    }
}

// .  .  .  .  .  

function calcAmount(N, C) {
if (N > emptys(C)) {
N = emptys (C);
}
return N;
console.log ("floor emptys for move " + N);
}

// .  .  .  .  .  

function topColorAmount(C) {
let j = 11 - emptys(C);
let a = c[C][j];
let i = 0;
let r = 0;

do {
   r += 1;
   i = c[C][j-r];
} while(i === a && r < 13);
return r;
}

// .  .  .  .  .  

function topColor(C) {
return c[C][11 - emptys(C)];
}
 
// .  .  .  .  .  


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: BUTTS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
// buttonsCtx.addEventListener("click", (event) => { fillClicked() });

plusP.addEventListener("click", (event) => { plusPlateClicked() });

minusP.addEventListener("click", (event) => { minusPlateClicked() });

plusC.addEventListener("click", (event) => { plusColorClicked() });

minusC.addEventListener("click", (event) => { minusColorClicked() });

menuButt.addEventListener("click", (event) => { menuButtClicked() });

setButt.addEventListener("click", (event) => { setButtClicked() });

adjustmentButt.addEventListener("click", (event) => { adjustmentButtClicked() });

clearButt.addEventListener("click", (event) => { showConfirmClearButt() });

confirmClearButt.addEventListener("click", (event) => { clear() });

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: BUTT FUNCTIONS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



function menuButtClicked() {
  if (showMenuButt === 1) {
    divMenu.style = "display: none;";
    menuButt.style.content = "url(menu.png)";
    showMenuButt = 0;
    showSetButt = 0;
    showButts = 0;
    divSet.style = "display: none;";
    divP.style = "display: none;";
    divC.style = "display: none;";

  } else {
    divMenu.style = "display: block;";
    menuButt.style.content = "url(menuO.png)";
    showMenuButt = 1;
  }
}

function setButtClicked() {
  if (showSetButt === 1) {
    divSet.style = "display: none;";
    showSetButt = 0;
  } else {
    divSet.style = "display: block;";
    showSetButt = 1;
  }
}


function showConfirmClearButt() {
  if (showConfirmButt === 1) {
    confirmClearDiv.style = "display: none;";
    showConfirmButt = 0;
  } else {
    confirmClearDiv.style = "display: block;";
    showConfirmButt = 1;
  }

}


function adjustmentButtClicked() {
  console.log("adjustmentButtClicked");
  if (showButts === 1) {
    divP.style = "display: none;";
    divC.style = "display: none;";
    showButts = 0;
  } else {
    divP.style = "display: inline;";
    divC.style = "display: inline;";
    showButts = 1;
  }
}

// .  .  .  .  .  

function plusPlateClicked() {
console.log("plus", lastPlate);
if (lastPlate > 29) {
} else {
  prepAnimationPlateUnlock(lastPlate + 1);
  lastPlate += 1;
  PL[rowFrom(lastPlate)][colFrom(lastPlate)] = 1;
  console.log(rowFrom(lastPlate), PL[rowFrom(lastPlate)]);
  update();
  }
}

// .  .  .  .  .  

function minusPlateClicked() {
console.log("minus", lastPlate);
if (lastPlate < 5) {
} else {
  PL[rowFrom(lastPlate)][colFrom(lastPlate)] = 0;
      prepAnimationPlateLock(lastPlate);
    lastPlate += -1;
//  console.log("row: ", rowFrom(lastPlate), "PL row: ", PL[rowFrom(lastPlate)]);
  update();
  }
}

// .  .  .  .  .  

function plusColorClicked() {
console.log("plus color clicked! ");
if (lastColor > 29) {
} else {
 lastColor += 1;
 update();
  }
}

// .  .  .  .  .  

function minusColorClicked() {
if (lastColor < 5) {

} else {
  lastColor += -1;
  update();
  }
}

// .  .  .  .  .  

async function fillClicked() {
  fill(13,5);
  setKey();
}



//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" LOGIC
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""  

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: EASING FUNCTION
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
function easeInBack(x) {
  const e1 = 1.70158;
  const e3 = e1 + 1;
  return e3 * x * x * x - e1 * x * x;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: FILL
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


function fill(N,C) {
    let total = floorEmptys(N);
    let filled = 0;
    let tubes = C;
    let NPT = Math.floor(N/C);
    console.log(NPT + ":" + total + ":" + tubes);

let j = 0
 do {
    j += 1;
    console.log(filled + " out of " + total + " filled.");
    	if (filled < total){
	    	// Filling
		let i = 0;
		let t = 0;
		do {
			t += 1;
		        console.log("i " + i);
	//  r is the tube/plate to be filled.
			let r = Math.floor(Math.random() * lastPlate) +1;
	    		console.log("r " + r);
	    		if (emptys(r) > NPT) {
				add(r,NPT);
	//  NPT is the amount of random color added to plate r
				i += 1;
	        		filled += NPT;
	        		console.log("filled " + filled);
	    		} else if (emptys(r) != 0) {
				add(r,emptys(r));
				i += 1;
	        		filled += r;
			}
      			
		} while (i < tubes && filled < total && t < 100);
     }
} while (j < 5);
moveDone();
}
 
// .  .  .  .  .  

function add (C,N) { 
	console.log ("added " + N + " to " + C);

	let place = 12 - emptys(C);
	console.log(place);
	console.log(c[C][place]);
	let r = Math.floor(Math.random() * (lastColor - 1)) + 1;  // random 1-lastColor COLOR
	let i = 0;
	do {
	i += 1;
	if (Math.floor(Math.random() * 2) === 1) {
		r = Math.floor(Math.random() * (lastColor - 1)) + 1;  // random 1-30 COLOR
	}
	c[C][place] = r;
	place += 1;
	console.log(c[C]);
	} while(i < N);
update();
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: AFTER MOVE LOGIC
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 


function moveDone() {
  let i = 0;
  do {
      i++;
      console.log(c[i][11]);
      if (c[i][11] != 0) {
          let k = c[i][11];
          console.log("k", k);
          if (c[i][10] === k ) { if (c[i][9] === k ) { if (c[i][8] === k ) { if (c[i][7] === k ) { if (c[i][6] === k ) { 
          if (c[i][5] === k ) { if (c[i][4] === k ) { if (c[i][3] === k ) { if (c[i][2] === k ) { if (c[i][1] === k ) { 
          if (c[i][0] === k ) { 
            console.log("ALL SAME COLOR: Tube:", i, "COLOR", k);
            clearTube(i, k);
          }}}}}}}}}}}

      }

  } while(i < 30);

// check if any plate is completly full of one color only and in the case clear it.
};

// .  .  .  .  .  

function clearTube(T, C) {

    c[T] = ["0","0","0","0","0","0","0","0","0","0","0","0"];
    console.log("cleared ", T, c[T]);
    animateClearTube(T, C, () => {
    });

    points += 1;
    score.textContent = points;
    console.log("points updated");
    console.log("color", lastColor);
    console.log("plate", lastPlate);

    if (points % 4 === 0) {
	plusColorClicked();
	console.log("points 4 %");
	console.log("color", lastColor)
    }
    if (points % 5 === 0) {
	plusPlateClicked();
	console.log("points 5 %");
        console.log(lastPlate);
    }
    setKey();
    update();
}

// .  .  .  .  . 

//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" BUTTONS CANVAS

function buttonsClear() {
	buttonsCtx.clearRect(0, 0, 32, 32);
}

function drawPlus(frame) {
  buttonsCtx.drawImage( plus, Number(frame * 32), 0, 32, 32, 0, 0, 32, 32);
  console.log("plus should be drawn");
}

function test() {
	drawPlus(0);
}

function loadingAnimation(N) {
	animateLoading(N, () => {
	});
}
// .  .  .  .  .  
function animateLoading(M, onDone) {
  let s = 0;
  let T = 0;
  function animate() {
    buttonsCtx.clearRect(0, 0, 32, 32);
    drawPlus(s);
    s+= 1;
    if (s < 20) {
      requestAnimationFrame(animate);
    } else {
	T += 1;
        if (T < M) { 
		s = 0;
		requestAnimationFrame(animate);
	} else {
		drawPlus(0);
		if (onDone) onDone();
	}
    }
  } 
animate();
}

// .  .  .  .  .  


//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" BIG CANVAS
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" 



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: SETUP VARS & FUNCTIONS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
			
const blobFrameWidth = 32;   			
const blobFrameHeight = 32;  	

const blobHeight = 7;
const blobHeightBig = 23;
const blobHeightExpanded = 32;
const plateHeight = 2;	
const spaceY = 5;

function plateY(N) {
return N * (blobHeight * 11 + blobHeightExpanded + plateHeight + spaceY) - 30;
}

const blobX = ["null", "0", "50", "100", "150", "200", "250","0", "50", "100", "150", "200", "250","0", "50", "100", "150", "200", "250","0", "50", "100", "150", "200", "250","0", "50", "100", "150", "200", "250"]



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: MOUSE CLICK LOGIC
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 

function mouseDetectX1(x,y) {
if (x < 32) {
mouseDetectY2(1,y);
} else if (x < 82 && x > 50) {
mouseDetectY2(2,y);
} else if (x < 132 && x > 100) {
mouseDetectY2(3,y);
} else if (x < 182 && x > 150) {
mouseDetectY2(4,y);
} else if (x < 232 && x > 200) {
mouseDetectY2(5,y);
} else if (x < 282 && x > 250) {
mouseDetectY2(6,y);
}
}

function mouseDetectY2(x,y) {
if (y < plateY(1) + 32) {
showSelected(x,1);
} else if (y > plateY(2) - blobHeight * 11 && y < plateY(2) + 32) {
showSelected(x,2);
} else if (y > plateY(3) - blobHeight * 11 && y < plateY(3) + 32) {
showSelected(x,3);
} else if (y > plateY(4) - blobHeight * 11 && y < plateY(4) + 32) {
showSelected(x,4);
} else if (y > plateY(5) - blobHeight * 11 && y < plateY(5) + 32) {
showSelected(x,5);
}
}

function showSelected(x,y) {
  let clicked = 6 * (y - 1) + x

  if (selected === clicked) {
    canvasDrawUnselect(selected);
    selected = "";

  } else if (selected === "") {
      selected = clicked;
      canvasDrawSelected();

  } else if (tryMove(selected, clicked) === false) {
      canvasDrawUnselect(selected);
      selected = clicked;
      canvasDrawSelected();      
  } else if (clicked > lastPlate) {  //           new script
	console.log("tried to move to locked plate");
	
  }   else {
      console.log("can move from: " + selected + " to " + clicked);
      move(selected, clicked);
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: MOVE BLOB LOGIC
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 

function tryMove(from, to) {

  if (emptys(from) === 12) {
  return false;

  } else if (emptys(to) === 12) {
  return true;

  } else if (emptys(to) > 0 && topColor(to) === topColor(from)) {
  return true;

  } else {
  return false;
  }
}


function move(from, to) {
	let i = 0;
	let p = "";
	let topFrom = calcAmount(topColorAmount(from), to);
	do {
		i += 1;
		p = c[from][11 - emptys(from)];  
	        console.log("p " + p);          
		c[from][11 - emptys(from)] = "0";
		console.log(c[from]);
	
	  } while(i < topFrom);
	
	selected = "";
	console.log("from ", from, "to ", to, "p ", p , "topFrom ", topFrom);
	
	animateMove(p, topFrom, from, to, () => {
	
	  console.log("from ", from, "to ", to, "p ", p , "topFrom ", topFrom);
	  console.log("animation done, adding moved blobs to new list");
	    i = 0;
	  do {
		i += 1;
		c[to][11 - emptys(to) + 1] = p;
	  } while(i < topFrom);
	  selected = "";
	  update();
	  console.log("updated, move should be done and visible.");
	  moveDone();
	});											  
}

// .  .  .  .  .  

//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" ANIMATIONS
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""  

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: PLATE LOCK ANIMATIONS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function prepAnimationPlateUnlock(N) {
    animatePlateUnlock(N, () => {
    }) 
}

// .  .  .  .  .  

function animatePlateUnlock(N, onDone) {
  let s = 0;
  function animate() {
   s+= 0.5;
   console.log(s);
    ctx.clearRect(blobX[N], plateY(rowFrom(N)), 32, 32);
    unlockFrame(Math.floor(s), blobX[N], plateY(rowFrom(N)));

  if (s < 20) {
    requestAnimationFrame(animate);
      } else {
       update();
      if (onDone) onDone(); // signal completion
    }
  } 
animate();
}


// .  .  .  .  .  

function prepAnimationPlateLock(N) {
    animatePlateLock(N, () => {
    }) 
}

// .  .  .  .  . 

function animatePlateLock(N, onDone) {
let s = 0;
let a;
  function animate() {
   s+= 0.5;
   a = s;
   if (a > 20) { 
       a = 20;
      }
   a = 20 - a;
    ctx.clearRect(blobX[N], plateY(rowFrom(N)), 32, 32);
    unlockFrame(Math.floor(a), blobX[N], plateY(rowFrom(N)));

  if (s < 30) {
    requestAnimationFrame(animate);
      } else {
       update();
      if (onDone) onDone(); // signal completion
    }
  } 
animate();
}

// .  .  .  .  .  

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: SELECTION ANIMATIONS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 

function canvasDrawSelected() {
  clearAll();
  let a = emptys(selected);
  let height = 12 -  a;
  for (let i = 0; i <= 11; i++) {
    canvasDrawHeight(i);
  }
  let s = 0;
    console.log("selected : " + selected);

    function grow() {
      s++;
      drawBlob(c[selected][height -1], s, 1, blobX[selected], plateY(Math.ceil(selected/6)) - blobHeight * (height - 1) - 2);
      if (s < 8) {
      requestAnimationFrame(grow);
      }
    }
  grow();
}

// .  .  .  .  .  

function canvasDrawUnselect(unselected) {

  let a = emptys(unselected);
  let height = 12 -  a;
  let s = 0;
    console.log("unselected : " + unselected);

    function grow() {
      s++;
      clearAll();
      for (let i = 0; i <= 11; i++) {
        canvasDrawHeight(i);
      }
      drawBlob(c[unselected][height -1], 8 - s, 1, blobX[unselected], plateY(Math.ceil(unselected/6)) - blobHeight * (height - 1) - 2);
      if (s < 8) {
      requestAnimationFrame(grow);
      }
    }
  grow();
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: CLEAR TUBE ANIMATIONS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 

function animateClearTube(T, C, onDone) {
  let s = 0;
  let totalMovement = blobHeight * 12 + 32;

  function animate() {
	s+= 0.02;
	update();	
	let H = 0;
	do {
		H += 1;
		let X = blobX[T];
		let Y = plateY(Math.ceil(T/6)) - blobHeight * H - 2;
		let M = easeInBack(s) * totalMovement;

		if ( Y + M < plateY(Math.ceil(T/6)) + blobHeight ) {
			drawBlob(C, 0, 1, X, Y + M);
		}
	} while (H < 12);
	let clearY = plateY(Math.ceil(T/6)) + 32;
	let clearX = blobX[T];
	ctx.clearRect(clearX, clearY, 32, 11);
  	if (s < 1) {
    		requestAnimationFrame(animate);
      	} else {
      		if (onDone) onDone(); 
    	}
  } 
animate();
}




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: MOVE ANIMATIONS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 

function animateMove(Color,Amount,From,To,onDone) {
  const sHeightMin = 12 - emptys(From);
  const sHeightMax = sHeightMin + Amount - 1;
  const eHeightMin = 12 - emptys(To);
  const eHeightMax = eHeightMin + Amount - 1;  
  const sx = Number(blobX[From]);
  const syMin = plateY(Math.ceil(From/6)) - blobHeight * sHeightMin - 2;
  const syMax = plateY(Math.ceil(From/6)) - blobHeight * sHeightMax - 2;
  const ex = blobX[To];
  const eyMin = plateY(Math.ceil(To/6)) - blobHeight * eHeightMin - 2;
  const eyMax = plateY(Math.ceil(To/6)) - blobHeight * eHeightMax - 2;

  let st = 0;
  let step = 0;

  function animateStep() {  	
	update();			
	st += 0.04;
	step = easeInBack(st);

	if (sHeightMax != sHeightMin) {
		let i = 0;
		do {
    			i += 1;
    			const aSy = syMin - blobHeight * (i - 1);
    			const aEy = eyMin - blobHeight * (i - 1);
    			const aDeltaY = aEy - aSy;
    			const aDeltaX = ex - sx;
			const drawBlobX = Math.max(0, aDeltaX * step + Number(sx));
			const drawBlobY = Math.max(0, aSy + (aDeltaY * step)) 

			drawBlob(Color, 0, 1, drawBlobX, drawBlobY);
		} while (i < Amount);
	} else {
    		const aDeltaY = eyMin - syMin;
    		const aDeltaX = ex - sx;

    		const drawBlobX = Math.max(0, aDeltaX * step + Number(sx) );
		const drawBlobY = Math.max( syMin + (aDeltaY * step));

   		drawBlob(Color, 0, 1, drawBlobX, drawBlobY );
		}

  	if (step < 1) {
    		requestAnimationFrame(animateStep);
      	} else {
      		if (onDone) onDone(); // signal completion
    	}
    }
  animateStep();
}

// .  .  .  .  .  



//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" 
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" BASIC ANIMATION FUNCTIONS
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" 


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: CLEAR AND DRAW PLATES
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  
function clearAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plateRow(1);
  plateRow(2);
  plateRow(3);
  plateRow(4);
  plateRow(5);
}

function plateRow(N) {
if (PL[N][0] === 1) {
      drawPlate(0, plateY(N));
} else {
      drawLockedPlate(0, plateY(N));
}

if (PL[N][1] === 1) {
      drawPlate(50, plateY(N));
} else {
      drawLockedPlate(50, plateY(N));
}

if (PL[N][2] === 1) {
      drawPlate(100, plateY(N));
} else {
      drawLockedPlate(100, plateY(N));
}

if (PL[N][3] === 1) {
      drawPlate(150, plateY(N));
} else {
      drawLockedPlate(150, plateY(N));
}

if (PL[N][4] === 1) {
      drawPlate(200, plateY(N));
} else {
      drawLockedPlate(200, plateY(N));
}

if (PL[N][5] === 1) {
      drawPlate(250, plateY(N));
} else {
      drawLockedPlate(250, plateY(N));
}
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: UPDATE ++
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function canvasUpdate() {
  clearAll();
  for (let i = 0; i <= 11; i++) {
    canvasDrawHeight(i);
  }
}
// .  .  .  .  .  

function canvasDrawHeight(N) {
  for (let i = 1; i <= 30; i++) {
     if (c[i][N] != 0) {
       drawBlob(c[i][N], 0, 1, blobX[i], plateY(Math.ceil(i/6)) - blobHeight * N - 2);
     }
  }
}

// .  .  .  .  .  

 

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: DRAWING FUNCTIONS
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 

function drawBlob(frameX, frameY, N, X, Y) {
  ctx.drawImage(
    blob,
    frameX * blobFrameWidth, 			
    frameY * blobFrameHeight,                        			
    blobFrameWidth,                			
    blobFrameHeight,               
    X,                         
    Y,                        
    blobFrameWidth * N,               
    blobFrameHeight * N            
  );
}

// .  .  .  .  .  

function unlockFrame(frameX, X, Y) {
  ctx.drawImage(
    unlockPlate,
    frameX * 32, 			
    0,                        			
    32,                			
    32,               
    X,                         
    Y,                        
    32,               
    32            
  );
}

// .  .  .  .  .  

function drawPlate(X, Y) {
  ctx.drawImage(
    plate,
    0, 0, 32, 32,               
    X, Y, 32, 32            
  );
}

// .  .  .  .  .  

function drawLockedPlate(X, Y) {
  ctx.drawImage(
    lockedPlate,
    0, 0, 32, 32,               
    X, Y, 32, 32            
  );
}




//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" END OF CODE

//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

// DOM
});
