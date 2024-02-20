
// LAB8.1: (SECTION 16: ASYNCHRONOUS JAVASCRIPT: PROMISES, ASYNC/AWAIT AND AJAX
// > CODING CHALLENGE #1)
// Trong bài này bạn cần phải xây dựng một function 'whereAmI' để render ra 1
// quốc gia dựa theo tọa độ GPS. Để làm được điều này bạn cần sử dụng một API
// thứ 2 để cho tọa độ mã hóa địa lý
// Đây là nhiệm vụ của bạn:
// PART 1
// 1. Tạo function whereAmI , whereAmI nhận 2 tham số đầu vào: vĩ độ (lat) và kinh
// độ (lng) ( Đây là tọa độ GPS, ví dụ bên dưới )
// 2. Thực hiện 'reverse geocoding' của các tọa độ được cung cấp. 'Reverse
// geocoding' có nghĩa là nó sẽ chuyển đồi từ tọa độ thành một địa chỉ có ý nghĩa
// như Hà Nội,Hải Phòng,... . Sử dụng API này để 'reverse geocoding':
// https://geocode.xyz/api.
// AJAX sẽ call API với địa chỉ URL dạng này:
// https://geocode.xyz/52.508,13.381?geoit=json. Sử dụng fetch API kết hợp với
// promises (then,catch) để lấy dữ liệu. Không được sử dụng function getJSON
// 3. Khi bạn đã có dữ liệu, hãy thử log nó ra để xem được tất cả các thuộc tính nhận
// được từ vị trí được cung cấp. Dùng data đó để log ra một dòng như: 'You are in
// Berlin, Germany';
// 4. Sử dụng method .catch() cuối mỗi promise để có thể bắt được lỗi khi thực hiện
// thất bại
// 5. API trên chỉ cho phép gửi 3 requests trong một giây. Nếu gửi quá nhanh bạn sẽ
// nhận được về mã lỗi 403. Chú ý có thể method .catch của fetch() sẽ không được
// chạy trong trường hợp này. Vì vậy hãy tự log response ra và tạo một message lỗi
// có ý nghĩa
// PART 2
// 6. Sử dụng data nhận được để render ra một quốc gia. Hãy lấy thuộc tính liên
// quan từ result API và cắm nó vào API đang sử dụng???(có lẽ chỗ này dịch sai)
// 7. Render ra một quốc gia mà không có lỗi nào xảy ra
// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474
// PART 1
const whereAmI = function (lat, lng) {
    // Reverse geocoding API URL
    const apiUrl = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Log the data received from the API
        console.log(data);
  
        // Extract relevant information and render the country
        const country = data.country;
        console.log(`You are in ${data.city}, ${country}`);
      })
      .catch(error => {
        console.error(`Error: ${error.message}`);
      });
  };
  
  // PART 2
  // Test coordinates
  const testCoordinates1 = { lat: 52.508, lng: 13.381 };
  const testCoordinates2 = { lat: 19.037, lng: 72.873 };
  const testCoordinates3 = { lat: -33.933, lng: 18.474 };
  
  // Call the function with test coordinates
  whereAmI(testCoordinates1.lat, testCoordinates1.lng);
  // You can call whereAmI with other test coordinates as well
  