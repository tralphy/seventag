/**
 * Copyright (C) 2015 Digimedia Sp. z.o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distrubuted in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import SelectorController from '../controllers/SelectorController.js';

var variableSelectorDirective = () => {

    return {
        restrict: 'A',
        require: ['variableSelector', 'ngModel'],
        scope: {},
        link: link,
        controller: SelectorController,
        controllerAs: 'selectorCtrl',
        bindToController: true
    };

    function link(scope, element, attrs, controllers) {
        let selectorController = controllers[0];
        let ngModel = controllers[1];

        selectorController.init(element, ngModel);
    }
};

export default variableSelectorDirective;
