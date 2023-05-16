/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 * @file datapos-engine-support/src/plugin.ts
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 */

// Engine Dependencies
import type { Component, ComponentItem } from './component';

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Plugin
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface Plugin extends Component {}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Plugin - Item
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface PluginItem extends ComponentItem {
    categoryLabel: string;
    label: string;
    reference: string;
    version: string;
}
