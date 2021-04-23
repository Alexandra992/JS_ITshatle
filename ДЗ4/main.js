 //let form = document.getElementById("geometry");
 //console.log(form);


 let btnCircle = document.getElementById("circle");
 //let btnCircle = form[0];
 //console.log(btnCircle);

 let btnSquare = document.getElementById("square");
 //let btnSquare = form[1];
 //console.log(btnSquare);

 
 let btnRectangle = document.getElementById("rectangle");
 //let btnRectangle = form[2];
 //console.log(btnRectangle);


//круг

 function clickCircle() {
   
   let inputSize = document.createElement('input');
   inputSize.id = "radius";
   inputSize.type = "number";
   inputSize.placeholder = "диаметр, px";
   document.body.append(inputSize);

   let inputColor = document.createElement('input');
   inputColor.type = "text";
   inputColor.id = "color";
   inputColor.placeholder = "цвет заливки, RGB";
   document.body.append(inputColor);

   let inputTop = document.createElement('input');
   inputTop.type = "number";
   inputTop.id = "top";
   inputTop.placeholder = "отступ сверху, px";
   document.body.append(inputTop);


   let inputLeft = document.createElement('input');
   inputLeft.type = "number";
   inputLeft.id = "left";
   inputLeft.placeholder = "отступ слева, px";
   document.body.append(inputLeft);

   let btnCreateCircle = document.createElement('button');
   btnCreateCircle.className = "create-circle-btn";
   btnCreateCircle.type = "submit";
   btnCreateCircle.innerHTML = "Создать";
   document.body.append(btnCreateCircle);

   function createFigure() {
     let figureSize = document.getElementById("radius").value;
     let figureColor = document.getElementById("color").value;
     let figureTop = document.getElementById("top").value;
     let figureLeft = document.getElementById("left").value;


     let circleFigure = document.createElement('div');

     circleFigure.style.backgroundColor = figureColor;
     circleFigure.style.width = `${figureSize}px`;
     circleFigure.style.height = `${figureSize}px`;
     circleFigure.style.borderRadius = "50%";
     circleFigure.style.position = "absolute";
     circleFigure.style.top = `${figureTop}px`;
     circleFigure.style.left = `${figureLeft}px`;

     document.body.append(circleFigure); 
     btnCreateCircle.disabled = "true";
   };
   document.querySelector(".create-circle-btn").addEventListener("click", createFigure);



   btnCircle.disabled = "true";
 };

 btnCircle.addEventListener("click", clickCircle);

//*******************************************************************************************//



//квадрат

 function clickSquare() {
  let inputSide = document.createElement('input');
  inputSide.id = "side";
  inputSide.type = "number";
  inputSide.placeholder = "сторона, px";
  document.body.append(inputSide);

  let inputColor = document.createElement('input');
  inputColor.type = "text";
  inputColor.id = "color";
  inputColor.placeholder = "цвет заливки, RGB";
  document.body.append(inputColor);

  let inputTop = document.createElement('input');
  inputTop.type = "number";
  inputTop.id = "top";
  inputTop.placeholder = "отступ сверху, px";
  document.body.append(inputTop);


  let inputLeft = document.createElement('input');
  inputLeft.type = "number";
  inputLeft.id = "left";
  inputLeft.placeholder = "отступ слева, px";
  document.body.append(inputLeft);

  let btnCreateSquare = document.createElement('button');
  btnCreateSquare.className = "create-square-btn";
  btnCreateSquare.type = "submit";
  btnCreateSquare.innerHTML = "Создать";
  document.body.append(btnCreateSquare);

  function createFigure() {
    let figureSide = document.getElementById("side").value;
    let figureColor = document.getElementById("color").value;
    let figureTop = document.getElementById("top").value;
    let figureLeft = document.getElementById("left").value;


    let squareFigure = document.createElement('div');

    squareFigure.style.backgroundColor = figureColor;
    squareFigure.style.width = `${figureSide}px`;
    squareFigure.style.height = `${figureSide}px`;
    squareFigure.style.position = "absolute";
    squareFigure.style.top = `${figureTop}px`;
    squareFigure.style.left = `${figureLeft}px`;

    document.body.append(squareFigure); 
    btnCreateSquare.disabled = "true";
  };
  document.querySelector(".create-square-btn").addEventListener("click", createFigure);



  btnSquare.disabled = "true";
};

btnSquare.addEventListener("click", clickSquare);

//****************************************************************************** */

//прямоугольник
function clickRectangle() {
  let inputWidth = document.createElement('input');
  inputWidth.id = "width";
  inputWidth.type = "number";
  inputWidth.placeholder = "ширина, px";
  document.body.append(inputWidth);

  let inputHeight = document.createElement('input');
  inputHeight.id = "height";
  inputHeight.type = "number";
  inputHeight.placeholder = "высота, px";
  document.body.append(inputHeight);

  let inputColor = document.createElement('input');
  inputColor.type = "text";
  inputColor.id = "color";
  inputColor.placeholder = "цвет заливки, RGB";
  document.body.append(inputColor);

  let inputTop = document.createElement('input');
  inputTop.type = "number";
  inputTop.id = "top";
  inputTop.placeholder = "отступ сверху, px";
  document.body.append(inputTop);


  let inputLeft = document.createElement('input');
  inputLeft.type = "number";
  inputLeft.id = "left";
  inputLeft.placeholder = "отступ слева, px";
  document.body.append(inputLeft);

  let btnCreateRectangle = document.createElement('button');
  btnCreateRectangle.className = "create-rectangle-btn";
  btnCreateRectangle.type = "submit";
  btnCreateRectangle.innerHTML = "Создать";
  document.body.append(btnCreateRectangle);

  function createFigure() {
    let figureWidth = document.getElementById("width").value;
    let figureHeight = document.getElementById("height").value;
    let figureColor = document.getElementById("color").value;
    let figureTop = document.getElementById("top").value;
    let figureLeft = document.getElementById("left").value;


    let rectangleFigure = document.createElement('div');

    rectangleFigure.style.backgroundColor = figureColor;
    rectangleFigure.style.width = `${figureWidth}px`;
    rectangleFigure.style.height = `${figureHeight}px`;
    rectangleFigure.style.position = "absolute";
    rectangleFigure.style.top = `${figureTop}px`;
    rectangleFigure.style.left = `${figureLeft}px`;

    document.body.append(rectangleFigure); 
    btnCreateRectangle.disabled = "true";
  };
  document.querySelector(".create-rectangle-btn").addEventListener("click", createFigure);



  btnRectangle.disabled = "true";
};

btnRectangle.addEventListener("click", clickRectangle);





























 /* let blueBtn = document.querySelector(".btn-add");
 blueBtn.innerText = 'Add';

 function clickBtn() {
   let textBox = document.createElement('div');
   textBox.innerHTML = "Some text";
   document.body.append(textBox);
 }

 blueBtn.addEventListener("click", clickBtn);


 let redBtn = document.querySelector(".btn-delete");

 function clickDelete() {
   let div = document.querySelector("body div:last-child");
   div.remove()
 }

 redBtn.addEventListener("click", clickDelete); */