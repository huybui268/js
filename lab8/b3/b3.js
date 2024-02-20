// LAB8.3: (SECTION 16: ASYNCHRONOUS JAVASCRIPT: PROMISES, ASYNC/AWAIT AND AJAX
// > CODING CHALLENGE #3)
// PART 1
// Viết lại async function 'loadNPause' để thực hiện lại bài tập 2, sử dụng
// async/await ( chỉ phần promise được sử dụng ). So sánh ưu nhược điểm của 2
// cách dùng, bạn thấy cách nào dễ dùng hơn
// Nhớ để tốc độ mạng xuống 'Fast 3G'
// PART 2
// 1. Khởi tạo 1 function bất đồng bộ 'loadAll' tham số nhận vào là một mảng các
// đường dẫn ( 'imgArr )
// 2. Sử dụng method .map để lặp qua lần lượt các giá trị, để tải lên tất các image
// bằng 'createImage' function ( gọi kết quả trả về của .map là imgs )
// 3. Log ra 'imgs' xem nó có nhận được kết quả mong muốn không?�
// 4. Sử dụng 'promise combinator' để có thể lấy ra được images element từ mảnh
// 5. Các imageElement nhận được sẽ thêm 1 class 'paralell' ( thêm cho nó một CSS
// riêng để thấy sự khác biệt )
// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. Để test, bạn cần tắt
// function “loadNPause”
// PART 1
const loadNPause = async function (imgPath) {
    try {
      // Load the first image
      const img1 = await createImage(imgPath[0]);
      // Pause execution for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Hide the first image
      img1.style.display = 'none';
      // Load the second image
      const img2 = await createImage(imgPath[1]);
      // Pause execution for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Hide the second image
      img2.style.display = 'none';
    } catch (error) {
      // Handle errors
      console.error(`Error: ${error.message}`);
    }
  };
  
  // PART 2
  const loadAll = async function (imgArr) {
    try {
      // Use Promise.all to load all images concurrently
      const imgs = await Promise.all(imgArr.map(createImage));
  
      // Log the images received
      console.log(imgs);
  
      // Use Promise.all to apply the class 'parallel' to all image elements
      await Promise.all(imgs.map(img => img.classList.add('parallel')));
    } catch (error) {
      // Handle errors
      console.error(`Error: ${error.message}`);
    }
  };
  
  // Test data
  const imgPaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
  
  // Uncomment the line below to test loadNPause function
  // loadNPause(imgPaths);
  
  // Uncomment the lines below to test loadAll function
  // Ensure that 'loadNPause' function is commented out to avoid conflicts
  // loadAll(imgPaths);
  