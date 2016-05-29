/**
 * ImageElement 생성자 정의
 * @param {string} element_id 엘리먼트 아이디
 * @constructor
 */
nts.view.ImageElement = function (element_id) {
    this._element = $(element_id);

    this._insertTemplate();
};

/**
 * ImageElement 객체의 프로토타입 정의
 */
nts.view.ImageElement.prototype = {

    /**
     * 최초 실행함수
     * 템플릿을 내부 변수에 캐시
     * @private
     */
    _insertTemplate: function () {
        this._imageTemplate = this._element.html();
    },

    /**
     * 반복 출력될 리스트 낱개를 모아 frag에 저장하는 함수
     * @param {Array} data 데이터 배열
     * @returns {DocumentFragment} 렌더링 효율을 위해 frag에 저장
     * @private
     */
    _createFrag: function (data) {
        var frag = document.createDocumentFragment(),
            i, length = data.length, template;

        for (i = 0; i < length; i += 1) {
            template = Mustache.render(this._imageTemplate, data[i]);
            frag.appendChild($(template)[0]);
        }

        return frag;
    }
};
