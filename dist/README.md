## Website Performance Optimization portfolio project

The purpose of this project is to optimize a provided website with a number of optimization and performance-related issues so that it achieves a target PageSpeed score >90 and runs at 60 frames per second.

### Work Done

#### Part 1: Optimize PageSpeed Insights score for index.html
* added async attribute to js src tags
* added media query media=“print” for print.css
* added rel=“preload” as=“style” to google font css to defer font load
* optmized images
* inlined css

To view and test the performance of the part 1 navigate to: https://khsharara.github.io

#### Part 2: Optimize Frames per Second in pizza.html

* In updatePositions(),instead of querying the DOM and executing a mathematical operation each time the for loop ran,(document.body.scrollTop / 1250) was refactored into a variable outside of the forloop.

* In changePizzaSizes(), moved pizza sizing code outside of the for loop since all pizzas are the same size. Used a variable (masterPizza) to refactor and reduce the amount of queries made on the DOM

To view and test the performance of part 2 navigate to: https://khsharara.github.io/views/pizza.html