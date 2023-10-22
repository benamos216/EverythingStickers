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
define('DB_NAME', 'agjjslmy_WPDRH');

/** Database username */
define('DB_USER', 'agjjslmy_WPDRH');

/** Database password */
define('DB_PASSWORD', '/a4q7&3qS<35i*BY#');

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
define('AUTH_KEY', 'f427f2e5d74fb32031e1ceb434d6d7700da5ffc1a10aa26a1112684a97772258');
define('SECURE_AUTH_KEY', 'd1fa225ff00f0aa24ad31ffa3deb77de01e6d5414fac71992966c83c1c67a958');
define('LOGGED_IN_KEY', 'ec57fec78b9ec0b7edbe44a8a3f74991406e2809dff18462b7c24f6c46aa4ed7');
define('NONCE_KEY', '6d2c0c1c333986785159d424fd27b6c919863f5e02c0758c2ab33ea975aa8677');
define('AUTH_SALT', 'dc4cc2a15c937ada39559e78afa69358296cd256c1cfbe0e28ee2a4a2921e1b2');
define('SECURE_AUTH_SALT', 'e3ad494497a3e605f891e0c9446840a603682a207722cf9f95a2eeb7616de33b');
define('LOGGED_IN_SALT', 'c68be4b5f0b3925d3b89a768244b92dff649db280bccb440acfd9f44b4ff0fb3');
define('NONCE_SALT', '6ae56bce43eba1f006dc89efe98176d06e7a3b69717d9be611e6b5da0f9592f8');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'jxO_';
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
