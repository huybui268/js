// LAB8.2: (SECTION 16: ASYNCHRONOUS JAVASCRIPT: PROMISES, ASYNC/AWAIT AND AJAX
// > CODING CHALLENGE #2)
// Xây dựng một chức năng loading ảnh và hiển thị ra màn hình
// PART 1
// 1. Khởi tạo một function 'createImage' tham số đầu vào là imgPath. Function này
// sẽ return về một Promise với chức năng là tạo ra 1 image mới ( dùng
// document.createElement('img') ) thuộc tính src của new image sẽ là tham số
// imgPath được truyền vào. Khi image được tải xong hãy append image element
// vừa tạo vào dom và thay thế element có selector là ".image". Trong trường hợp
// load ảnh bị lỗi hãy reject promise đi
// Nếu phần này quá khó thì chỉ cần xem phần đầu tiên của phần solution
// PART 2
// 2. Thực hiện promise bằng .then và cũng thêm .catch để xử lý lỗi
// 3. Sau khi load xong image hãy tạm dừng thực thi trong 2s bằng function đã tạo
// trước đó
// 4. Sau khi chờ xong 2s, hãy ẩn image hiện tại ( style = display: none ) và load tiếp
// hình ảnh thứ 2
// 5. Sau khi image thứ 2 đang load. thì cũng tạm dừng thực thi trong 2s
// 6. Sau 2s thì sẽ ẩn hình ảnh hiện tại
// ( Gợi ý: Hiểu đơn giản là 1 hình ảnh sau khi được load xong sau 2s sẽ bị ẩn đi và
// hiện hình ảnh tiếp theo lên )
// TEST DATA: Test data bằng cách đặt sai đường dẫn ảnh hoặc chỉnh tốc độ mạng
// xuống còn Fast 3G trong: F12 => Netword => biểu tượng bên cạnh icon wifi
// PART 1
const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
      // Create a new image element
      const img = document.createElement('img');
      // Set the src attribute to the provided imgPath
      img.src = imgPath;
  
      // Event listener for successful image loading
      img.addEventListener('load', function () {
        // Append the image to the DOM and replace the existing image with class ".image"
        document.querySelector('.image').replaceWith(img);
        // Resolve the promise
        resolve(img);
      });
  
      // Event listener for image loading error
      img.addEventListener('error', function () {
        // Reject the promise with an error message
        reject(new Error('Image failed to load'));
      });
  
      // Append the image element to the DOM
      document.querySelector('.images-container').appendChild(img);
    });
  };
  
  // PART 2
  // Call the createImage function with the first image path
  createImage('path/to/first/image.jpg')
    .then(img => {
      // Pause execution for 2 seconds using setTimeout
      return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
      // Hide the current image after 2 seconds
      document.querySelector('.image').style.display = 'none';
      // Load the second image
      return createImage('path/to/second/image.jpg');
    })
    .then(img => {
      // Pause execution for 2 seconds
      return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
      // Hide the current image after 2 seconds
      document.querySelector('.image').style.display = 'none';
    })
    .catch(error => {
      // Handle errors
      console.error(`Error: ${error.message}`);
    });
  