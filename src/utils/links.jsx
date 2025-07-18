import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  { text: 'Dashboard', path: '.' },
  { text: 'Add content', path: 'addsub', icon: <FaWpforms /> },
  { text: 'All content', path: 'all-subs', icon: <MdQueryStats /> },
  { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
  { text: 'profile', path: 'profile', icon: <ImProfile /> },
  { text: 'Pending', path: 'pending', icon: <MdAdminPanelSettings /> },
];

export default links;
