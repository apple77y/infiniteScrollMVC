/**
 * BaseEntity 생성자 정의
 * @returns {*}
 * @constructor
 */
nts.model.BaseEntity = function () {
    this._data = [];
    this._keyWord = '';
};

/**
 * BaseEntity 객체의 프로토타입 정의
 */
nts.model.BaseEntity.prototype = {

    /**
     * 데이터를 호출
     * @returns {Object}
     * @public
     */
    getData: function () {
        return this._data;
    },

    /**
     * 데이터에 값을 저장
     * @param {Object} data dao 객체에서 보낸 데이터
     * @public
     */
    setData: function (data) {
        this._data = data;

        // 방어 코드
        if (this.dispatchEvent) {
            this.dispatchEvent('update');
        }
    }
};
