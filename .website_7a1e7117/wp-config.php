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
define('DB_NAME', 'agjjslmy_WPGZH');

/** Database username */
define('DB_USER', 'agjjslmy_WPGZH');

/** Database password */
define('DB_PASSWORD', '3}1H^@<6D(SYXkGR*');

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
define('AUTH_KEY', 'd83187c69d008076b7759d57c02d3e1934d3123d532118eaaaf3c5e664e2f5b2');
define('SECURE_AUTH_KEY', '27c49db2aee3c500c7c30e761421294f016fe4e8e88905d3e7c2ec21e7a80e2c');
define('LOGGED_IN_KEY', 'ca1f23dc7a1778a14c853a39698bb1daa530fe4c042bc8a73bab9e33e4452c54');
define('NONCE_KEY', '1b785abd2fab5263ec15177c17c61e55492624802bfaf659c550fe2b0b088694');
define('AUTH_SALT', '44b694bd9e18135a30612d18cad1cfeb276eb659175189d92517021ba3e776b3');
define('SECURE_AUTH_SALT', '83e250b473b83903c4f2530d1c07290056298540a1b3df6cb014d335dd110c2d');
define('LOGGED_IN_SALT', 'df2b4cf0e848c222f04115e1f93e1d972e948f768ef5ed7e9da1e3c3d74b4d1e');
define('NONCE_SALT', '1d5deb607da1cd9d0a76fb3ca536f523ad6de438e3f2e2753651c56cf2c38b85');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'k0W_';
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
