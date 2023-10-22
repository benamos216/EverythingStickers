<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'agjjslmy_WP1SN');

/** Database username */
define('DB_USER', 'agjjslmy_WP1SN');

/** Database password */
define('DB_PASSWORD', 'goT{y%jS0yZX6zA.D');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'dd46f6a05674bdd547465b76d235bdddddfe7774f3e99ba7728aba5cafbb360a');
define('SECURE_AUTH_KEY', '940d086263e21c49f3dfa6081478dd9fc0dc506aec04363348003c58665f6bde');
define('LOGGED_IN_KEY', '3c16bd790bf44f90da593b0e7886544f562167c923f88dad7f1860754f0745a1');
define('NONCE_KEY', '9028b4935828bf93df873e66a99a84885b96d8ecf4726e8a13323e898129a6cc');
define('AUTH_SALT', '6c42c6a7676cc3673ff5b3f8f2a18a1437500f953b9fafc601505d82e99eb86f');
define('SECURE_AUTH_SALT', '1e33f69f9370540fb2a1f5ca62871337918b5be637f396f098953679447900a4');
define('LOGGED_IN_SALT', 'dae55135ebb8788845c9fb2a6d49e83db20863f068482d42c8ef4773a81fe9fe');
define('NONCE_SALT', '4e16ccbd8151467e387cb76ab26894a9868eeaeed25257031a44ec1d8e6113db');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '2Nh_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 20);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
