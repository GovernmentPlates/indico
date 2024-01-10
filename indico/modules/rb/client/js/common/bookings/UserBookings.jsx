// This file is part of Indico.
// Copyright (C) 2002 - 2023 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header, List, Popup, Label} from 'semantic-ui-react';

import {Translate} from 'indico/react/i18n';
import moment from 'moment';

import {actions as bookingActions} from '../../common/bookings';

export default function UserBookings() {
  return <b>!!!</b>;
}
