/**
 * ImageSearchController 생성자 정의
 * @param {Object} entity 엔티티 객체
 * @param {Object} view 뷰 객체
 * @returns {*}
 * @constructor
 */
nts.controller.ImageSearchController = function (entity, view) {
    this._entity = entity;
    this._view = view;
    this._dao = new nts.model.ImageSearchDao(this._entity);

    this._bindViewEvents();
    this._bindModelEvents();
    this._dao.findAll();
};

/**
 * ImageSearchController 객체의 프로토타입 정의
 */
nts.controller.ImageSearchController.prototype = {

    /**
     * view element에 이벤트를 바인드
     * @private
     */
    _bindViewEvents: function () {
        this._view._getMore.on('click', this._onClickChange.bind(this));
        $(document).on('scroll', this._onScrollChange.bind(this));
    },

    /**
     * 모델에 커스텀 이벤트를 바인드
     * @private
     */
    _bindModelEvents: function () {
        this._entity.addEventListener('update', this._onClickUpdateModel.bind(this));
        this._entity.setKeyword('트와이스');
    },

    /**
     * 클릭 이벤트일 때 실행
     * @private
     */
    _onClickChange: function () {
        this._dao.findAll();
    },

    /**
     * 스크롤 이벤트일 때 실행
     * @private
     */
    _onScrollChange: function () {
        if (this._view.checkScrollEnd()) {
            this._dao.findAll();
        }
    },

    /**
     * 모델 update일 때 실행
     * @private
     */
    _onClickUpdateModel: function () {
        this._view.render(this._entity.getData());
    }
};
