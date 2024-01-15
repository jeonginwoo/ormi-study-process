// 모달 제어 함수
function toggleModal() {
    // 모달 요소
    var modal = document.getElementById("myModal");

    // 모달 열기 버튼
    var openModalBtn = document.getElementById("openModalBtn");

    // 모달 닫기 버튼
    var closeModalBtn = document.getElementById("closeModalBtn");

    // 모달 열기 버튼에 이벤트 리스너 추가
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // 모달 닫기 버튼에 이벤트 리스너 추가
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
