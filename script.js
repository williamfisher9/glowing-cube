const cube = document.querySelector(".cube");

cube.addEventListener("mousemove", (event) => {
    let currentX = event.clientX;
    let currentY = event.clientY;

    let centerXPoint = cube.getBoundingClientRect().width / 2 + cube.getBoundingClientRect().left;
    let centerYPoint = cube.getBoundingClientRect().height / 2 + cube.getBoundingClientRect().top;

    let perspectiveOriginX = centerXPoint-currentX;
    let perspectiveOriginY = centerYPoint-currentY;
    
    cube.style.perspectiveOrigin = `${perspectiveOriginX*5}px ${perspectiveOriginY*5}px`;
})