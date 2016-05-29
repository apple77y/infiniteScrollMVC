/**
 * ImageSearchList 생성자 정의
 * @param {string} list_class 리스트 클래스
 * @constructor
 */
nts.view.ImageSearchList = function (list_class) {
    this._observer = new nts.helper.Observer();
    this._list = $(list_class);

    this._cacheElements();
};


/**
 * ImageSearchList 객체의 프로토타입 정의
 */
nts.view.ImageSearchList.prototype = {

    /**
     * 더보기 element를 내부 변수에 캐시
     * @private
     */
    _cacheElements: function () {
        this._getMore = $('.more_img');
    },

    /**
     * 리스트를 렌더링
     * @param {Array} data 데이터 배열
     * @private
     */
    _listRender: function (data) {
        var element = new nts.view.ImageElement('#singleImage'),
            list;

        list = element._createFrag(data);
        this._list.append(list);
    },

    /**
     * 컨트롤러에서 걸어놓은 이벤트들 제거
     * @private
     */
    _removeEvents: function () {
        this._getMore.off('click');
        $(document).off('scroll');
        this._observer.unSubscribe('update');
    },

    /**
     * 뷰 전체 렌더링
     * @param {Object} data 컨트롤러에서 받은 데이터
     * @public
     */
    render: function (data) {
        var me = this;

        if (data) {
            me._listRender(data);
        } else {
            me._removeEvents();
        }
    },

    /**
     * 스크롤이 끝까지 내려갔는지 체크
     * @returns {boolean}
     * @public
     */
    checkScrollEnd: function () {
        var documentH = $(document).height(),
            viewportH = $(window).height(),
            scrollTop = $(window).scrollTop();

        return (documentH - (viewportH + scrollTop)) === 0;
    }
};
